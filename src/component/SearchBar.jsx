function SearchBar({ handleSubmit, value, onChange, isLoading }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search Recipe"
        className="form-control"
      />
      <input
        type="submit"
        className="btn"
        value="Search"
      />
    </form>
  );
}

export default SearchBar;
