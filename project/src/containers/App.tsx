import React,{Component} from 'react';
// import './App.module.css';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

interface addTitle{
  name:string;
}

// class App extends Component 
class App  extends Component{

  // constructor(props:any){
  //   super(props);
  //   console.log('[App.tsx]constructor');
  // }
  state = {
    persons:[
      {id: "lal1", name:'Max', age:28},
      {id: "lal2", name:'Manu', age:29},
      {id: "lal3", name:'Benas', age:32}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props:any,state:any){
    console.log('[App.tsx] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.tsx]componentWillMount')
  // }

  componentDidMount(){
  console.log('[App.tsx]componentDidMount')
  }

  shouldComponentUpdate(nextProps:any,nextState:any){
    console.log('[App.tsx] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(nextProps:any,nextState:any){
    console.log('[App.tsx] shouldComponentUpdate');
  }

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
  console.log('[App.tsx]render');

  let persons = null;

 
 
  if(this.state.showPersons){
    persons=    

        <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
        />;      
        
     }
  

  return (
    
     <div className={classes.App}>      
       <Cockpit
       
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonsHandler}
       />
        {persons}        
     </div>
    
  );
  }
}
export default App;


