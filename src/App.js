import React, { Component } from 'react';
//import logo from './logo.svg';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
//import friends from "./friends.json";
import friends from "./heroes.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor() {
    super();
    this.highScoreArr = [];
  }
  state = {
    friends,
    score: 0,
    topScore: 0,
    isGameLost: false
  };

  // function gets called when the page loads
  componentDidMount() {
    // reorders the dataarray on state changes
    this.setState({ friends: this.setFriends(this.state.friends) });
  }

  //Add the status of the clicked object to the JSON when the page loads
  setFriends = (data) => {
    const dataWithClick = data.map(item => ({ ...item, clicked: false }));
    return dataWithClick;
  };

  //Reset clicked element back to false in JSON when user looses
  resetFriends = (data) => {
    const resetClickedData = data.map(item => (item.clicked = false));
    return resetClickedData;
  };

  updateFriendClick = (data, id) => {
    //Has an item been clicked once:
    let imgClickedOnce = false;
    let updatedData = data.map(item => {
      // eslint-disable-next-line no-unused-expressions
      //Win Condition
      if ((item.id === id) && (!item.clicked)) {
        imgClickedOnce = true;
        item.clicked = 'true';
        this.incrementScore();
        //console.log("ITEM = ",item);
        //NOTE: ITEM MUST BE RETURNED
        return item;
      }//if 
      //Loose Condition
      else if ((item.id === id) && (item.clicked)) {
        imgClickedOnce = false;
        item.clicked = 'false';
        this.resetScore();
        //NOTE: ITEM MUST BE RETURNED
        return item;
      }
      //No Click Condition
      else {
        //NOTE: ITEM MUST BE RETURNED
        return item;
      }//else*/
    });//updatedData

    //Shuffle images on the copy of friends data, if the user wins
    if (imgClickedOnce) {
      //Don't Wobble Cards
      this.setState({ isGameLost: false });
      //shuffle the data
      this.shuffleFriends(updatedData);
    }
    //Reset the clicked element in every element of the friends data
    else if (!imgClickedOnce) {
      //Wobble cards
      this.setState({ isGameLost: true });
      //console.log("UPDATEFRIENDCLICK: ALL VALUES ARE BEING RESET")
      this.setState({ friends: this.resetFriends(updatedData) });
    }
    return updatedData;
  };//updateFrienClick

  //Update the friends data based on wins or loses
  handleClicked = (id) => {
    //console.log("ID = " + id);
    let newData = this.updateFriendClick(this.state.friends, id);
    //console.log("NewData = "+JSON.stringify(newData));
    this.setState({ friends: newData });
    //console.log("HandleClicked: NEW OBJECT = "+ JSON.stringify(this.state.friends));
  };//handleClicked

  incrementScore = () => {
    // We always use the setState method to update a component's state
    let newScore = this.state.score + 1;
    //console.log("NEW SCORE = " + newScore);
    //this.setState({ score: `${newScore}`});

    /* this.setState(prevState =>{
       //Note YOU MUST RETURN THE NUMBER
       return {score: prevState.score + 1};
     })*/
    this.setState({
      score: newScore
    });
    //console.log("SCORE IS = " + this.state.score);
    //return newScore;
  };
  //Calculate the best score and resets score on loss
  resetScore = () => {
    let newScore = 0;
    this.highScoreArr.push(this.state.score);
    this.highScoreArr.sort();

    let arrSize = this.highScoreArr.length;
    let bestScore = this.highScoreArr[arrSize - 1];
    /*console.log("ResetScore: High Score Array = " + this.highScoreArr + " Length of Array = " + this.highScoreArr.length);
    console.log("ResetScore: Best Score = " + bestScore);*/
    this.setState({ topScore: bestScore });
    /*console.log("ResetScore: Top Score = " + this.state.topScore);*/
    this.setState({ score: newScore });
  };

  //Fisher-Yates Shuffle ALgorithm(NOTE: Manipulate the cloned JSON data before storing in state)
  shuffleFriends = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <div className="flex-container main-container">
          <div className="row mx-0">
          <div className="col-12 px-0">
            <Header score={this.state.score} topScore={this.state.topScore} />
          </div>
          {/*<div className = "container m-0 w-100">*/}
          <div className="col-9 mx-auto">
            <div className="row justify-content-center align-items-center ">
              {this.state.friends.map(friend => (
                <FriendCard className="col-1"
                  incrementScore={this.incrementScore}
                  resetScore={this.resetScore}
                  handleClicked={this.handleClicked}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                  clicked={friend.clicked}
                  isGameLost={this.state.isGameLost}
                />)
              )}
            </div>{/*row*/}
          </div>{/*col*/}
        </div>{/*row*/}
      </div>
        
      <Footer/>
      </Wrapper>
    </div>);
  }
}

export default App;