import React from 'react';
import PhotoListItem from './PhotoListItem';

function PhotoList({ photos, toggleFav, favs }) {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={{
            id: photo.id,
            imageSource: photo.urls.regular,
            profile: photo.user.profile,
            username: photo.user.username,
            location: photo.location
          }}
          toggleFav={toggleFav}
          isFavourite={favs.includes(photo.id)}
        />
      ))}
    </div>
  );
}

export default PhotoList;