import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {

  const [favorites, setFavorites] = useState(false)

  function handleFavorites(){
    return setFavorites(!favorites)
  }

  function handleTrash(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method:"DELETE",
    })
      .then((r)=>r.json())
      .then(()=>handleDelete(listing))
    
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorites ? (
          <button onClick={handleFavorites} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorites} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleTrash} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
