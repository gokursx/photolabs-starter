import React, { useState } from 'react';

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
    // Destructure your state update functions here
  } = useApplicationData();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // New state for selected photo details
  
  console.log("mockPhotoData", mockPhotoData);
  console.log("mockTopicData", mockTopicData);

  return (
    <div className="App">
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
        setIsModalVisible={setIsModalVisible} 
        setSelectedPhoto={setSelectedPhoto} // Pass the new state setter
      />
      {isModalVisible &&
        <PhotoDetailsModal 
          closeDisplayModal={setIsModalVisible} 
          photoDetails={selectedPhoto} // Pass the selected photo details
        />
      }
    </div>
  );
};

export default App;