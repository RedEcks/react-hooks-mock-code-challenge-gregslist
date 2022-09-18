import React from "react";
import ListingCard from "./ListingCard";

//1. When the app starts, I can see all listings. (done)
//2. Map over listings (done)
//3. render all listings (done)
//4. need listingsContainer (done)
//5. need listingsCard (done)
//6. map over listings and render listings card for each listing (done)
//7. get button for star icon (done)
//8. add event listener on click, use call back function to do line 12 (done)
//change star icon to full if true, else empty star when false. Need state for toggle (done)
//trash icon can delete listing. Add event listener. need fetch DELETE for backend. useState need to track listing and update (done)  
//search bar filters 


function ListingsContainer({listings, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>{
          return <ListingCard handleDelete={handleDelete} key={listing.id} listing={listing}/>}
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
