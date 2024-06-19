import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

function PhotoListItem({ photo, toggleFav, isFavourite }) {
  return (
    <div className="photo-list__item">
      <div className="photo-list__item-content">
        <img className="photo-list__item-image" src={photo.imageSource} alt="Photo" />
        <PhotoFavButton 
          photoId={photo.id} 
          toggleFav={toggleFav} 
          isFavourite={isFavourite}
        />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-image" src={photo.profile} alt={photo.username} />
        <div className="photo-list__user-info">
          <h3 className="photo-list__user-name">{photo.username}</h3>
          {photo.location && photo.location.city && photo.location.country && (
            <p className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;