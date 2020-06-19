import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';


// class App extends Component 
class App extends Component {
  state = {
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Benas', age:32}
    ],
    otherState: 'some other value'
  };



  switchNameHandler = (newName:any)=>{
    // console.log('was clicked');
    // this.state.persons[0].name='Maximilian';
    this.setState({
    
      persons:[
        {name:newName,age:58},
        {name:'Manu',age:29},
        {name:'Benas',age:33}
      ]
      
    })
  }

  nameChangedHandler = (event:any)=>{
    this.setState({
      persons:[
        {name:'Max',age:58},
        {name:'maxxx',age:29},
        {name:event.target.value,age:33}
      ]
    }

    )
  }




render(){
  const style={
    backgroundColor:'white',
    font:'inherit',
    border:'1x solid blue',
    padding:'8px',
    cursor:"pointer"
 
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>hi I am a React App</h1>
        <p>This is really working!</p>
        <button
        style={style}
         onClick={()=>this.switchNameHandler('maximilian!!1')}>Switch name</button>
        <Person
         name ={this.state.persons[0].name}
          age={this.state.persons[0].age} ></Person>
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age} ></Person>
        <Person
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}
         click={this.switchNameHandler.bind(this,'ma')} 
         changed={this.nameChangedHandler}> my hobies: Fishing</Person>
      </header>
    </div>
  );
  }
}
export default App;


