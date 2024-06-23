import React from "react";
import PropTypes from 'prop-types';
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, onTopicClick }) => {
  if (!topics.length) {
    return <p>No topics available</p>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      <ul>
        {topics.map((topic) => (
          <TopicListItem 
            key={topic.id} 
            topic={topic} 
            onTopicClick={onTopicClick} />
        ))}
      </ul>  
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  onTopicClick: PropTypes.func.isRequired
};

export default TopicList;