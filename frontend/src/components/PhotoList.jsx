import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={{
            imageSource: photo.urls.regular,
            profile: photo.user.profile,
            username: photo.user.username,
            location: photo.location
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;