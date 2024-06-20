import React, { useState } from 'react';

// Import App styles
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';

const App = () => {
  // State variable to control the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("mockphotodata", mockPhotoData);
  console.log("mocktopicdata", mockTopicData);

  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData} setIsModalVisible={setIsModalVisible} />
      
      {/* Render modal based on isModalVisible state */}
      {isModalVisible && <PhotoDetailsModal closeDisplayModal={setIsModalVisible} />}
    </div>
  );
};

export default App;