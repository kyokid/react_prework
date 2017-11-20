import React, { Component } from 'react';

class TweetBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            remainCharacter: 140
        };
    }

    handleChange(text) {
        this.setState(
            {
                text: text,
                remainCharacter: 140 - text.length
            });
    }

    render() {
        return (
            <div className="ui form">
                <div>
                    <textarea type="text" className="Tweet-Box"
                        placeholder={this.props.prompt}
                        onChange={(e) => this.handleChange(e.target.value)}
                    />
                    <p> {this.state.remainCharacter} </p>
                    <button onClick={() => this.props.onTweet(this.state.text)}
                        disabled={this.state.remainCharacter < 0}
                        className="Tweet-Button"
                    >
                        Tweet
                </button>
                </div>
            </div>
        );
    }
}

export default TweetBox;
