import React from "react";

import "../styles/PhotoListItem.scss";

function PhotoListItem({ photo }) {
  return (
    <div className="photo-list__item">
      <div>
      <h2>{photo.title}</h2>
      <img src={photo.imageSource} alt={photo.title} /> 
    </div>
    </div>

    
    
  );
};

export default PhotoListItem;

