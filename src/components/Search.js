import React, { useState, useEffect } from 'react';

function Search({handleSearch})  { 
const [userSearch, setUserSearch] = useState("");

const changeUserSearch = (event) => {
    event.preventDefault();
    setUserSearch(event.target.value);
}

useEffect(() => {
    handleSearch(userSearch);
  }, [userSearch]);


  return (
      <input
        onChange={changeUserSearch}
        type="text"
        name="userSearch"
        placeholder="Search..."
        value={userSearch} />
  );
}

export default Search;