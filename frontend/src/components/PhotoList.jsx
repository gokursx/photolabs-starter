import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

function PhotoList({ photos, toggleFav, favs, setSelectedPhoto, setIsModalVisible }) {
  console.log('Rendering PhotoList with photos:', photos); // Debug log
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={{
            id: photo.id,
            imageSource: photo.urls.regular,
            profile: photo.user.profile,
            username: photo.user.username,
            location: photo.location,
            similar_photos: photo.similar_photos
          }}
          toggleFav={toggleFav}
          isFavourite={favs.includes(photo.id)}
          setSelectedPhoto={setSelectedPhoto} // Pass setSelectedPhoto to PhotoListItem
          setIsModalVisible={setIsModalVisible} // Pass setIsModalVisible to PhotoListItem
        />
      ))}
    </ul>
  );
};

export default PhotoList;