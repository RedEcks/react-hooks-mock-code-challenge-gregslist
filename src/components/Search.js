import React, { useState } from "react";

function Search({listings, setListings}) {

  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log("search",search)
    let searchListings= listings.filter((listing)=>{
        return search===listing.description 
    })
    setListings(searchListings)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder= "search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
