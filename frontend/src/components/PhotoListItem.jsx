import React from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';

const PhotoListItem = ({ photo, toggleFav, isFavourite, setIsModalVisible, setSelectedPhoto }) => {
  const { id, imageSource, username, location } = photo;
  // photo={photo};
  // const photo={{
  //   id: photo.id,
  //   imageSource: photo.urls.regular,
  //   profile: photo.user.profile,
  //   username: photo.user.username,
  //   location: photo.location,
  //   similar_photos: photo.similar_photos
  // }}

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
          <FavIcon isFavourite={isFavourite}></FavIcon>
          
        </button>
      </div>
    </div>
  );
};

export default PhotoListItem;