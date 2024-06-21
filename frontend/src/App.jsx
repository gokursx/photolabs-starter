import React from 'react';

// Import App styles
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds, // Ensure this is destructured if needed in the component
    // Destructure any other needed functions here
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos} 
        topics={state.topics} 
        setIsModalVisible={(isVisible) => {
          if (!isVisible) onClosePhotoDetailsModal();
        }} 
        setSelectedPhoto={onPhotoSelect} // Use the new state update function
      />
      {state.isModalVisible &&
        <PhotoDetailsModal 
          closeDisplayModal={() => onClosePhotoDetailsModal()} 
          photoDetails={state.selectedPhoto} // Use the updated state
        />
      }
    </div>
  );
};

export default App;