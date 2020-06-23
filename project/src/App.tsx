import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button<{alt:boolean}>`
  background-color:green${props=>props.alt ? 'red':'green'};
  color:white;
  font:inherit;
  border:1x solid blue;
  padding:8px;
  cursor:pointer;

  &:hover{
    background-color: ${props=>props.alt ? 'salmon': 'lightgreen'};
    color:black;
}

`;

// class App extends Component 
class App extends Component {
  state = {
    persons:[
      {id: "lal1", name:'Max', age:28},
      {id: "lal2", name:'Manu', age:29},
      {id: "lal3", name:'Benas', age:32}
    ],
    otherState: 'some other value',
    showPersons: false
  };



  

  nameChangedHandler = (event:any, id:string)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person={
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});


    
  }

  deletePersonHandler = (personIndex:number)=>{
    // const persons = this.state.persons;
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  togglePersonsHandler = ()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

render(){
  const style={
    backgroundColor:'green',
    color:'white',
    font:'inherit',
    border:'1x solid blue',
    padding:'8px',
    cursor:"pointer",
    ':hover':{
      backgroundColor: 'lightgreen',
      color:'black'
    }
 
  };

  let persons = null;
  if(this.state.showPersons){
    persons= (
      <div>

        {this.state.persons.map((person,index)=>{
          return <Person
          click={()=>this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key = {person.id}
          changed={(event:Event)=>this.nameChangedHandler(event, person.id)}/>


        })}    
        
      </div>
    );
    style.backgroundColor='red';
    style[':hover']={
      backgroundColor: 'salmon',
      color:'black'   
     };
  }
  let classes = [];
  if (this.state.persons.length<=2){
    classes.push('red');
  }

  if (this.state.persons.length<=1){
    classes.push('bold');
  }


  return (
    
     <div className="App">      
        <h1>hi I am a React App</h1>
        <p className= {classes.join(' ')}>This is really working!</p>
        <StyledButton 
        alt={this.state.showPersons}        
        onClick={this.togglePersonsHandler}>Switch name
        </StyledButton>    
        {persons}        
     </div>
    
  );
  }
}
export default App;


