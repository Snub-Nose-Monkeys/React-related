import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onSearchChange }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      //not to rend anonymous function everytime, it will slow down your code
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
