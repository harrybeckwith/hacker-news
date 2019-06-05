import React from "react";
import "./styles/App.scss";
import NewsItem from "./components/NewsItem";
import axios from "axios";

class App extends React.Component {
  state = {
    newsIds: [],
    stories: [],
    numStories: 30,
    newsStart: 0,
    newsEnd: 30
  };

  componentDidMount() {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
      .then(res => {
        const newsIds = res.data;
        this.setState({ newsIds });
        this.getStories(this.state.newsIds);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  getStories = storyId => {
    const stories = [];

    for (let i = 0; i < storyId.length; i++) {
      axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${
            storyId[i]
          }.json?print=pretty`
        )

        .then(res => {
          const newsTop = res.data;

          stories.push(newsTop);

          this.setState({
            stories
          });
        })
        .catch(error => console.error(error));
    }
  };
  render() {
    return (
      <div className="top-stories">
        <div className="top-stories__header">
          <h2 className="top-stories__header__title">Hacker News</h2>
        </div>
        <div className="top-stories__news">
          {Object.keys(
            this.state.stories.slice(this.state.newsStart, this.state.newsEnd)
          ).map((item, index) => (
            <NewsItem
              newsInfo={this.state.stories[item]}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
