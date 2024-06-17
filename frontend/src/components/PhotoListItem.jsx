import React from "react";

import "../styles/PhotoListItem.scss";

function PhotoListItem({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.thumbnailUrl} alt={data.title} />
    </div>
  );
};

export default PhotoListItem;

