import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(items => setItems(items))
}, []);

function handleDelete (id) {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
})
.then(r => r.json())
.then(() => {
  const deleteCard = items.filter(i => i.id !== id);
  setItems(deleteCard)
})

  }
  const listingItems = items
  .filter(lists => lists.description.toLowerCase().includes(search.toLowerCase())
  )
  .map(item => {
    return (
    <ListingCard
    key = {item.id}
    listing = {item}
    onDeleteClick = {handleDelete}
    />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
