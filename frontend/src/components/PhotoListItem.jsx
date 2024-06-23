import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, toggleFav, isFavourite, setIsModalVisible, setSelectedPhoto }) => {
  const { id, imageSource, profile, username, location } = photo;

  const handlePhotoClick = () => {
    setSelectedPhoto(photo);  // Update the state with the clicked photo's details
    setIsModalVisible(true);  // Set modal visibility to true when photo is clicked
  };

  return (
    <div className="photo-list-item" onClick={handlePhotoClick}>
      <img src={imageSource} alt={username} />
      <div className="photo-info">
        <h3>{username}</h3>
        <p>{location.city}, {location.country}</p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from bubbling up
            toggleFav(id);
          }}
        >
          {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </button>
      </div>
    </div>
  );
};

export default PhotoListItem;