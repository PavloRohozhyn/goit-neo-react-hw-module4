import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import defaultData from "../../../data.json";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import "./App.css";

function App() {
  const [contact, setContact] = useState(() => {
    const localDataCounts = localStorage.getItem("pbc");
    if (localDataCounts !== null) return JSON.parse(localDataCounts);
    return defaultData;
  }); // Predefined contact data

  /** set data into localStorage */
  useEffect(() => {
    localStorage.setItem("pbc", JSON.stringify(contact));
  }, [contact]);

  const [sbox, setSbox] = useState(""); // Search Box, search by name
  const event2value = (e) => {
    setSbox(e.target.value);
  }; // get value from event

  const handleContactForm = (v, e) => {
    // validation
    if ("" === v.uname) {
      console.log("name is empty");
      return;
    }
    if (!/[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(v.unumber)) {
      console.log("number is fail");
      return;
    }
    // end validation
    const newRec = {
      id: nanoid(),
      name: v.uname,
      number: v.unumber,
    };
    addContact(newRec);
    e.resetForm();
  }; // Add New Contact handler form

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  }; // Add New Concact

  const delContact = (id) => {
    setContact(contact.filter((el) => el.id != id));
  }; // Delete contact

  const ready = contact.filter((contact) => {
    return contact.name
      .toLowerCase()
      .trim()
      .includes(sbox.toLowerCase().trim());
  }); // search contact by name

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm fn={handleContactForm} />
        <SearchBox qvalue={sbox} qfn={event2value} />
        <ContactList data={ready} fn={delContact} />
      </div>
    </>
  );
}

export default App;
