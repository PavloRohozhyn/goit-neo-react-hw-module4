import React from "react";
import css from "./ImageCard.module.css";

const imageCard = ({ data, fn }) => {
  const { urls, alt_description } = data;
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img
          src={urls.small}
          alt={alt_description}
          onClick={() => fn(data)}
          width="360px"
          height="300px"
        />
      </div>
    </div>
  );
};

export default imageCard;
