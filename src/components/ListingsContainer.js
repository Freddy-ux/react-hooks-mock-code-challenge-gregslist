import React,{useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items,setItems}) {

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then((response) => {
        setItems(items.filter((list) => list.id !== id));
      })
      .catch((error) => console.error(error));
  }
  
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ListingCard key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
