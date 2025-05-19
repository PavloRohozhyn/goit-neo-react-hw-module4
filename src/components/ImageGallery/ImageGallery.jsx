import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imgs, fn }) => {
  return (
    <ul className={css.contactlist}>
      {imgs.map((el) => (
        <li key={el.id} className={css.contactListItem}>
          <ImageCard data={el} fn={fn} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
