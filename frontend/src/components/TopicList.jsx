import React from "react";

import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul>
        {sampleDataForTopicList.map((topic) => (
          <li key={topic.id}>
            <a href={`/topics/${topic.slug}`}>{topic.title}</a>
          </li>
        ))}
      </ul>  
    </div>
  );
};

export default TopicList;
