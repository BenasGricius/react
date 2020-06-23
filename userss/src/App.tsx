import React,{ Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// type Username={
//   userName:string
// }


// function App() 
class App extends Component {
  state={
    username:'supermax'
  }

  usernameChangeHandler=(event:any) =>{
    this.setState({username:event.target.value})
  }

  render(){
  return (
    <div className="App">
      
      <UserInput changed = {this.usernameChangeHandler}
      currentName={this.state.username}
      />
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Max"/>
    </div>
  );
}
}

export default App;
