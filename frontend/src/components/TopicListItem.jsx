import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      <span>{topic.title}</span>
      <li onClick={() => onTopicClick(topic.id)}>{topic.name}</li>
    </div>
  );
}

export default TopicListItem;
