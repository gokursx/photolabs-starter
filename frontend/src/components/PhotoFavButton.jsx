import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const [favouritePhoto, setFavouritePhoto] = useState(false);

<div className="photo-list__fav-icon" onClick={() => setFavouritePhoto(prev => !prev)}></div>

function PhotoFavButton() {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;