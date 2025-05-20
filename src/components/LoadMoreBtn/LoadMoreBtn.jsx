import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ fn }) => {
  return (
    <>
      <button className={css.btn} onClick={() => fn()}>
        Load More
      </button>
    </>
  );
};
export default LoadMoreBtn;
