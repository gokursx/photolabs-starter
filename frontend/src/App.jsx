// // frontend/src/App.jsx
// import React from 'react';

//  // import PhotoListItem from './components/PhotoListItem';
//  import PhotoList from './components/PhotoList';
//  import './App.scss';

// const sampleDataForPhotoListItem = {
  // id: "1",
  // location: {
  //   city: "Montreal",
  //   country: "Canada",
  // },
  // imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  // username: "Joe Example",
  // profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

//  const App = () => (
//    <div className="App">
//      {/* The rest of your React code */}
//    </div>
//  )

// export default App;

import React from 'react';
import PhotoListItem from 'components/PhotoListItem';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = [...Array(3)];
const sampleArrayOfPhotos = photos.map((photo, i) => 
  <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />
);

function App() {
  return (
    <div className="App">
    {sampleArrayOfPhotos}
  </div>
  );
}

export default App;
