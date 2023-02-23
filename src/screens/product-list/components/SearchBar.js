import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <input
      className="search-bar"
      placeholder="🔍 Search"
      type="search"
      onChange={(value) => props.onValueChange(value.target.value)}
    ></input>
  );
};

export default SearchBar;
