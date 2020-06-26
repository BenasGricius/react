
import React,{Component} from 'react';

import Person from './Person/Person'

interface prop{
  persons:any
  clicked:any;
  changed:any;
}


class Persons extends Component<prop>{

  // static getDerivedStateFromProps(props:any,state:any){
  //   console.log('[Persons.tsx]getDerivedStateFromPros');
  //   return state;
  // }
  shouldComponentUpdate(nextProps:any, nextState:any){
    console.log('[Persons.tsx]getDerivedStateFromPros');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps:any, prevState:any){
    console.log ('[Persons.tsx] getSnapshotBeforeUpdate');
  }


  componentDidUpdate(){
    console.log('[PErsons.tsx] componentDidUpdate')
  }

  componentWillUnmount(){
    console.log ('PErsons.tsx] componentWillUnmount')
  }



  constructor(props:prop){
  super(props)
  }
  render(){
    
    console.log('[Persons.tsx] rendering...');
    return this.props.persons.map((person:any,index:any) =>{
        
        return   <Person
        click={()=>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key = {person.id}
        changed={(event:Event)=>this.props.changed(event, person.id)}/> 


      });

    };
    
  }
    
export default Persons;

