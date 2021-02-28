import React, {Component} from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {username: "UserName"};

  clickHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render = () => {
    return (
      <div>
        <UserInput
          notify={this.clickHandler}
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          fgColor='#ff0000'
          username={this.state.username}/>
        <UserOutput
          fgColor='#00ff00'
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
