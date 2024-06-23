// frontend/src/components/TopNavigationBar.jsx
import React from 'react';
// Import styles for TopNavigationBar
import '../styles/TopNavigationBar.scss';
// Import TopicList and FavBadge components
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render TopicList component within the Top Navigation Bar */}
      <TopicList topics={props.topics} onSelectTopic={props.onSelectTopic} />
      {/* Render FavBadge component within the Top Navigation Bar */}
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
}

export default TopNavigationBar;