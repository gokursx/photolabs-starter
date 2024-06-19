// frontend/src/App.jsx
import React from 'react';

// Import PhotoList component
import PhotoList from './components/PhotoList';

// Import App styles
import './App.scss';

import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* Render TopNavigationBar component */}
      <TopNavigationBar />
      {/* Render PhotoList component */}
      <PhotoList />
    </div>
  )
}

export default App;