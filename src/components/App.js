import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings]= useState([])

  function handleDelete(listing){
    let newListings = listings.filter(list=>{
      return list.id!==listing.id
    })
    setListings(newListings)
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
      .then((response)=>response.json())
      .then((data)=>setListings(data))
  },[])

  return (
    <div className="app">
      <Header setListings={setListings} listings={listings} />
      <ListingsContainer handleDelete={handleDelete} listings={listings} />
    </div>
  );
}

export default App;
