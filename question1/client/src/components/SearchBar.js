import React from 'react';

const SearchBar = () => {
    return (
        <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <input
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
    );
};

export default SearchBar;
