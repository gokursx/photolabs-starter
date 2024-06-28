import React from "react";
import PropTypes from 'prop-types';
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, onTopicClick }) => {
  // console.log('Topics in TopicList:', topics);
  
  if (!topics.length) {
    return <p>No topics available</p>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      
        {topics.map((topic) => (
          <TopicListItem 
            key={topic.id}
            topic={topic}
            onTopicClick={onTopicClick}
          />
        ))}
      
    </div>
  );
};
TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  onTopicClick: PropTypes.func.isRequired
};


export default TopicList;