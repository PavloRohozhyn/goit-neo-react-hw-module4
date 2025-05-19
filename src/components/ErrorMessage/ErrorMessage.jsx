import toast from "react-hot-toast";

const ErrorMessage = ({ msg, type }) => {
  return (
    <>
      {type === "error"
        ? toast.error(msg)
        : type === "success"
        ? toast.success(msg)
        : null}
    </>
  );
};

export default ErrorMessage;
