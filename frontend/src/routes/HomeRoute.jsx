import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favs, setFavs] = useState([]);

  const toggleFav = (photoId) => {
    setFavs((prevFavs) =>
      prevFavs.includes(photoId)
        ? prevFavs.filter((id) => id !== photoId)
        : [...prevFavs, photoId]
    );
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} isFavPhotoExist={favs.length > 0} />
      <PhotoList 
        photos={props.photos} 
        toggleFav={toggleFav} 
        favs={favs} 
        setIsModalVisible={props.setIsModalVisible}  // Pass setIsModalVisible to PhotoList
        setSelectedPhoto={props.setSelectedPhoto}  // Pass setSelectedPhoto to PhotoList
      />
    </div>
  );
};

export default HomeRoute;