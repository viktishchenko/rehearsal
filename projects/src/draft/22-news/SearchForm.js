import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
