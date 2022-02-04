import React, {useCallback} from 'react';
import debounce from 'lodash.debounce';

const CountrySearch = ({handleSearchInputChange}) => {
    const debounceSearchInputChange = useCallback(debounce(event => handleSearchInputChange(event), 500), []);

    return (
        <div>
            <label htmlFor="search">Search: </label><input id="search" type="text" onChange={debounceSearchInputChange}></input>
        </div>
    )
};

export default CountrySearch;

