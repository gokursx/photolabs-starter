import React from "react";
import PropTypes from 'prop-types';
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      <span className="topic-list__item-title" onClick={() => onTopicClick(topic.id)}>{topic.title}</span>
    </div>
  );
}

TopicListItem.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTopicClick: PropTypes.func.isRequired,
};

export default TopicListItem;