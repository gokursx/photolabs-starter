import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} onTopicClick={props.onSelectTopic} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
}
export default TopNavigationBar;