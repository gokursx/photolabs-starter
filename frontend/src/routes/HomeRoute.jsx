import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
      {/* Insert React */}
      {/* Render TopNavigationBar component */}
      <TopNavigationBar />
      {/* Render PhotoList component */}
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
