import React, {useState} from 'react';
import CountrySearch from './components/Country/CountrySearch.js';
import CountryList from './components/Country/CountryList.js';

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  return (
    <div>
      <CountrySearch handleSearchInputChange={handleSearchInputChange}/>
      <CountryList searchInput={searchInput}/>
    </div>
  );
}

export default App;
