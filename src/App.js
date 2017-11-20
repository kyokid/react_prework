import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  handleTweet(tweetText) {
    if (tweetText === "") {
      return;
    }

    let tweetObj = {
      text: tweetText,
      liked: false
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t
    });

    this.setState({
      tweets
    })
  }

  handleDelete(tweet) {
    let tweetsWillBeStay = this.state.tweets.filter(query =>
      query.text !== tweet.text
    );

    this.setState({
      tweets: tweetsWillBeStay
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React this React that!</h1>
        </header>
        <div>
          <TweetBox prompt="What's on your mind?" onTweet={this.handleTweet.bind(this)} />
        </div>
        <div className="ui container">
          <div className="ui cards">
            {
              this.state.tweets.map((tweet) => (
                <Tweet
                  tweet={tweet}
                  time={new Date()}
                  handleLike={this.handleLike.bind(this)}
                  handleDelete={this.handleDelete.bind(this)}
                />
              )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
