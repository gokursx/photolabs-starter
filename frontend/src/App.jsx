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
    // Destructure any other needed functions here
  } = useApplicationData();

  console.log("mockPhotoData", mockPhotoData);
  console.log("mockTopicData", mockTopicData);

  return (
    <div className="App">
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
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