import React, { useEffect } from 'react';
import PhotoList from './PhotoList'; // Import the PhotoList component
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, photoDetails }) => {
  useEffect(() => {
    console.log('Photo details:', photoDetails); // Log the photo details to the console
  }, [photoDetails]);

  return (
    <div className="photo-details-modal">
      <button onClick={() => closeDisplayModal(false)} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      {/* Main photo details */}
      {photoDetails && (
        <div className="photo-details-content">
          <img src={photoDetails.imageSource} alt={photoDetails.username} />
          <div className="photo-info">
            <h3>{photoDetails.username}</h3>
            <p>{photoDetails.location.city}, {photoDetails.location.country}</p>
          </div>
        </div>
      )}

      {/* Similar photos section */}
      {photoDetails && photoDetails.similarPhotos && (
        <div className="photo-details-modal__similar-photos">
          <h4>Similar Photos</h4>
          <PhotoList photos={photoDetails.similarPhotos} />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;