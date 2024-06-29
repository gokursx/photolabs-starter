import React, { useState } from 'react';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const isFavPhotoExist = state.favouritePhotos.length > 0;

  return (
    <div className="App">
      <HomeRoute 
        favs= {state.favouritePhotos} 
        toggleFav = {updateToFavPhotoIds}
        photos={state.photos} 
        topics={state.topics}
        setIsModalVisible={(isVisible) => {
          if (!isVisible) onClosePhotoDetailsModal();
        }} 
        setSelectedPhoto={onPhotoSelect}
        onSelectTopic={onLoadTopic} 
      />
      {state.isModalVisible && (
        <PhotoDetailsModal 
          closeDisplayModal={onClosePhotoDetailsModal} 
          photoDetails={state.selectedPhoto}
          favs = {state.favouritePhotos}
          toggleFav = {updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;

