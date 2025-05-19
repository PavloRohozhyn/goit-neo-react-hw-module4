import Modal from "react-modal";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

// modalOpenFlag={modalOpenFlag}
// modalClose={modalClose}
// modalImgSelected={modalImgSelected}

const ImageModal = ({ modalOpenFlag, modalCloseFn, modalImgSelected }) => {
  return (
    <Modal
      className={css.ModalWindow}
      overlayClassName={css.ModalOverlay}
      isOpen={modalOpenFlag}
      onRequestClose={modalCloseFn}
      contentLabel="Preview"
    >
      <a href={modalImgSelected.links.html} target="_blank" rel="noreferrer">
        <img
          className={css.ModalImage}
          src={modalImgSelected.urls.regular}
          alt={modalImgSelected.alt_description}
        />
      </a>
    </Modal>
  );
};

export default ImageModal;
