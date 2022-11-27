import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return <div>SearchForm</div>;
};

export default SearchForm;
