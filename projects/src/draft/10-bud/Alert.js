/* imrse */
import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
