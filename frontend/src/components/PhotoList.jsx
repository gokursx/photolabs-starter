import React from 'react';
import PhotoListItem from './PhotoListItem';

function PhotoList({ photos, toggleFav, favs }) {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFav={toggleFav}
          isFavourite={favs.includes(photo.id)}
        />
      ))}
    </div>
  );
}

export default PhotoList;