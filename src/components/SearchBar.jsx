import React from 'react';

const SearchBar = ({ filterText, handleChange }) => {
  return (
    <div className="form_wrap">
      <input
        type="text"
        placeholder="Search for..."
        name="filterText"
        value={filterText}
        onChange={handleChange} />
    </div>
  );
}

export default SearchBar;