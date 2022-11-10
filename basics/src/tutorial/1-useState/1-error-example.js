const ErrorExample = () => {
  const title = "random title";

  const handlerClick = () => {
    console.log(title);
  };
  return (
    <>
      <h3>{title}</h3>
      <button className="btn" onClick={handlerClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
