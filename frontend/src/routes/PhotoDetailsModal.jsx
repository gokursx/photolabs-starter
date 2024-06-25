import React, { useEffect, useRef } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ closeDisplayModal, photoDetails }) => {
  const modalRef = useRef(null);

  // Close modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDisplayModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeDisplayModal]);

  return (
    <div className="photo-details-modal">
      <div ref={modalRef} className="photo-details-modal__content">
        <button onClick={closeDisplayModal} className="photo-details-modal__close-button">
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

        {photoDetails && photoDetails.similarPhotos && (
          <div className="photo-details-modal__similar-photos">
            <h4>Similar Photos</h4>
            <PhotoList photos={photoDetails.similarPhotos} />
          </div>
        )}

      </div>
    </div>

  );
};

export default PhotoDetailsModal;