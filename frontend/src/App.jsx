import React from 'react';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import {useState} from "react";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const isFavPhotoExist = state.favouritePhotos.length > 0;
  
  const [favs, setFavs] = useState([]);

  const toggleFav = (photoId) => {
    setFavs((prevFavs) =>
      prevFavs.includes(photoId)
        ? prevFavs.filter((id) => id !== photoId)
        : [...prevFavs, photoId]
    );
  };
  

  return (
    <div className="App">
      <HomeRoute 
        favs= {favs} 
        toggleFav = {toggleFav}
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
          favs = {favs}
          toggleFav = {toggleFav}
        />
      )}
    </div>
  );
};

export default App;

