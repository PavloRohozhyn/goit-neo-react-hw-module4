const LoadMoreBtn = ({ fn }) => {
  return (
    <div>
      <button onClick={() => fn("test")}>Load More</button>
    </div>
  );
};
export default LoadMoreBtn;
