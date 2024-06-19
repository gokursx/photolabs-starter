// frontend/src/App.jsx
import React from 'react';

// Import PhotoList component
import PhotoList from './components/PhotoList';

// Import App styles
import './App.scss';

import TopNavigationBar from './components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';

const App = () => {
  return (
    <div className="App">
      {/* Render TopNavigationBar component */}
      <TopNavigationBar />
      {/* Render PhotoList component */}
      <PhotoList />
      <HomeRoute />
    </div>
  )
}

export default App;