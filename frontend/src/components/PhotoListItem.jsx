import React from "react";
import "../styles/PhotoListItem.scss";

const photos = [...Array(3)];
const sampleArrayOfPhotos = photos.map((photo, i) => 
  <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />
);

function PhotoListItem({ photo }) {
  return (
    <div className="App">
    {sampleArrayOfPhotos}
 
    <div className="photo-list__item">
      <div className="photo-list__item-content">
        <img className="photo-list__item-image" src={photo.imageSource} alt="Photo" /> 
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-image" src={photo.profile} alt={photo.username} /> 
        <div className="photo-list__user-info">
        <h3 className="photo-list__user-name">{photo.username}</h3>
        {/* Displaying location */}
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PhotoListItem;
