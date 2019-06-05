import React from "react";

const NewsItem = props => {
  return (
    <div className="news-item">
      <p className="news-item__num">{props.index + 1}. </p>
      <div className="news-item__info">
        <a
          href={`${props.newsInfo.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="news-item__title"> {props.newsInfo.title}</p>
        </a>

        <p className="news-item__extra">
          {props.newsInfo.score} points by {props.newsInfo.by} |
          <a
            className="news-item__comments"
            href={`https://news.ycombinator.com/item?id=${props.newsInfo.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            comments {props.newsInfo.descendants}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
