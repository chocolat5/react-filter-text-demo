import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filterText, handleChange } = this.props;

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
}

export default SearchBar;