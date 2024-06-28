import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} isFavPhotoExist={props.favs.length > 0} onSelectTopic={props.onSelectTopic}/>
      <PhotoList 
        photos={props.photos} 
        toggleFav={props.toggleFav} 
        favs={props.favs} 
        setIsModalVisible={props.setIsModalVisible}  // Pass setIsModalVisible to PhotoList
        setSelectedPhoto={props.setSelectedPhoto}  // Pass setSelectedPhoto to PhotoList
      />
    </div>
  );
};

export default HomeRoute;