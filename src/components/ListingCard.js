import React, { useState, useEffect } from "react";

function ListingCard({ item,handleDelete }) {
const { id, description, image, location } = item;

// Initialize the favorite state to false
const [isFavorite, setIsFavorite] = useState(false);

// Define a function to handle the favorite/unfavorite button click
function handleFavorite() {
// Toggle the favorite state
setIsFavorite(!isFavorite);
}

// Update the UI when the favorite state changes
useEffect(() => {
console.log(`Listing ${id} is ${isFavorite ? "favorited" : "unfavorited"}`);
}, [isFavorite]);
 
function handleDeleteClick() {
  handleDelete(id);
}

return (
<li className="card">
<div className="image">
<span className="price">$0</span>
<img src={image} alt={description} />
</div>
<div className="details">
{isFavorite ? (
<button onClick={handleFavorite} className="emoji-button favorite active">★</button>
) : (
<button onClick={handleFavorite} className="emoji-button favorite">
☆
</button>
)}
<strong>{description}</strong>
<span> {location}</span>
<button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
</div>
</li>
);
}

export default ListingCard;

