import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      dummyData: dummyData
    };
  };
  
  
  
  render() {
    return (
      <div className="App">
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
