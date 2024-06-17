import React from "react";

import "../styles/PhotoListItem.scss";

function PhotoListItem({ photo }) {
  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.imageSource} alt={photo.title} />
      
    </div>
  );
};

export default PhotoListItem;

