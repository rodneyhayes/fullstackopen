import React from 'react';

const Search = ({handleSearchChange}) => {
    return(
        <div>
        <h3>Search</h3>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" onChange={handleSearchChange}/>
        </div>
    )
}

export default Search;