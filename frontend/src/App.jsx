// frontend/src/App.jsx
import React from "react"

// Import PhotoList component
import PhotoList from './components/PhotoList';
// Import TopicList component
import TopicList from 'components/TopicList';

// Import App styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* Render PhotoList component */}
      <PhotoList />
      {/* Render TopicList component */}
      <TopicList />
    </div>
  )
}

export default App;