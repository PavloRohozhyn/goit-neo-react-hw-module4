import { useState, useEffect } from "react";

import { getImageGalleryData } from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState(0); // query search data
  const [hits, setHits] = useState([]); // images data
  const [isLoading, setIsLoading] = useState(false); // loader
  const [error, setError] = useState(false); // errors
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(0); // pagination
  const [modalOpenFlag, setModalOpenFlag] = useState(false); // modal
  const [modalImgSelected, setModalImgSelected] = useState(null);

  const modalOpen = (img) => {
    setModalImgSelected(img);
    setModalOpenFlag(true);
  };

  const modalClose = () => {
    setModalOpenFlag(false);
    setModalImgSelected(null);
  };

  const handleLoadMore = () => {
    console.log("load more click");
    setPage(page + 1);
  }; // load more btn handler

  useEffect(() => {
    if (!searchQuery) return; // disable onload search
    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = await getImageGalleryData(searchQuery, page);

        setHits((prev) => {
          return page === 1 ? data : [...prev, ...data];
        });
      } catch (err) {
        setError(true);
        setErrorMessage(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [page, searchQuery]); // api call

  const handleSearchBar = async (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1); // all time its new search query
    // e.resetForm();
  }; // search form handler

  return (
    <>
      <SearchBar onSubmit={handleSearchBar} />
      {hits && <ImageGallery imgs={hits} fn={modalOpen} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={errorMessage} />}
      {hits && hits.length > 0 && <LoadMoreBtn fn={handleLoadMore} />}
      {/* images render */}
      {modalImgSelected && (
        <ImageModal
          modalOpenFlag={modalOpenFlag}
          modalCloseFn={modalClose}
          modalImgSelected={modalImgSelected}
        />
      )}
    </>
  );
}

export default App;
