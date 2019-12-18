import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "",
    friends: friends,
    score: 0,
    unselectedFriends: friends
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  selectFriend = name => {
    const findFriend = this.state.unselectedFriends.find(
      item => item.name === name
    );

    if (findFriend === undefined) {
      // failure to select a new dog
      this.setState({
        message: "You lost!",
        score: 0,
        friends: friends,
        unselectedFriends: friends
      });

    } else {
      // success to select a new dog
      const newFriends = this.state.unselectedFriends.filter(
        item => item.name !== name
      );

      this.setState({
        message: "You guessed right!",
        score: this.state.score + 1,
        friends: friends,
        unselectedFriends: newFriends
      });
    }
    if(this.state.score >= 11) {
      this.setState({
        message: "You won!",
        score: 0,
        friends: friends,
        unselectedFriends: friends
      });

    }

    this.shuffleArray(friends);
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} message={this.state.message} />
        {this.state.friends.map(friend => (
          <FriendCard
            name={friend.name}
            image={friend.image}
            selectFriend={this.selectFriend}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
