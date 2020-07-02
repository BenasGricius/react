import React,{Component} from 'react';
// import './App.module.css';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilary from '../hoc/Auxilary';
import AuthContext from '../context/auth-context'
interface AppProps{
 
  addTitle:string;
  nextProps:Function;
  nextState:Function;
  
}

// class App extends Component 
class App  extends Component<AppProps>{

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
    showPersons: false,
    changeCounter:0,
    authenticated:false,
    showCockpit:true,
  };

  static getDerivedStateFromProps(props:any,state:string|number|boolean){
    console.log('[App.tsx] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.tsx]componentWillMount')
  // }

  componentDidMount(){
  console.log('[App.tsx]componentDidMount')
  }

  shouldComponentUpdate(nextProps:AppProps,nextState:AppProps){
    console.log('[App.tsx] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(nextProps:AppProps,nextState:AppProps){
    console.log('[App.tsx] shouldComponentUpdate');
  }

  nameChangedHandler = (event:React.FormEvent<HTMLInputElement>, id:string)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person={
      ...this.state.persons[personIndex]
    };

    person.name = event.currentTarget.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons,changeCounter:this.state.changeCounter+1});


    
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

  loginHandler = ()=>{
    this.setState({authenticated:true});
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
        isAuthenticated = {this.state.authenticated}
        />;      
        
     }
  

  return (
    
     <AuthContext.Provider value={{authenticated:this.state.authenticated, login: this.loginHandler}}> 
     {this.state.showCockpit ? (

        <Cockpit
       
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          
      
        />
      ): null}
      {persons}        
     </AuthContext.Provider>
    
  );
  }
}
export default withClass(App, classes.App);


