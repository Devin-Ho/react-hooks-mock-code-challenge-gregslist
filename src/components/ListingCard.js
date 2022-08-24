import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {
const {id, image, description, location} = listing
const [like, setLike] = useState(false)

function handleLike () {
  //console.log("This is clicked")
  setLike(!like)
}

function handleDelete () {
  onDeleteClick(id)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick = {handleLike} >
        {like ? (
          <button className="emoji-button favorite active">★</button>
          // can also use... onClick= {() => setLike (false) instead of onClick = {handleLike}
        ) : (
          <button className="emoji-button favorite">☆</button>
          //can also use... onClick= {() => setLike (true)
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
