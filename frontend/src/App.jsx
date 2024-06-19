// frontend/src/App.jsx
import React from 'react';

// Import PhotoList component
import PhotoList from './components/PhotoList';

// Import App styles
import './App.scss';

import TopNavigationBar from './components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';

import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics'
console.log("mockphotodata",mockPhotoData);
console.log("mocktopicdata",mockTopicData);
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={mockPhotoData} topics={mockTopicData}/>
      
    </div>
  )
}

export default App;