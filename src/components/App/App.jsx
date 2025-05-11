import { useState, useEffect } from "react";
import { getImageGalleryData } from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import ContactList from "../../components/ContactList/ContactList";

import "./App.css";

function App() {
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState(0);

  // useEffect(() => {
  //   const fetching = async () => {
  //     const data = getImageGalleryData();
  //     setHits(data.hits);
  //   };
  //   fetching();
  // });

  const handleSearchBar = async (v, e) => {
    try {
      setIsLoading(true);
      setError(false);
      setHits([]);
      const data = await getImageGalleryData(v);
      setHits(data.hits);
    } catch (err) {
      setError(true);
      setErrorMessage(err);
      console.log("error message", err);
    } finally {
      setIsLoading(false);
    }
    // e.resetForm();
  };

  const handleLoadMore = (event) => {
    console.log(event);
  };

  return (
    <>
      <SearchBar fn={handleSearchBar} isDisabled={isLoading} />
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={errorMessage} />}
      <ul>{hits && hits.map((el) => <li key={1}>{console.log(el)}</li>)}</ul>
      {hits > 0 && <LoadMoreBtn fn={handleLoadMore} />}
    </>
  );
}

export default App;
