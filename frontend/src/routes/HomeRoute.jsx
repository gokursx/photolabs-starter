import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      {/* Render TopNavigationBar component */}
      <TopNavigationBar topics={props.topics}/>
      {/* Render PhotoList component */}
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;
