
import React,{PureComponent} from 'react';

import Person from './Person/Person';

interface prop{
  persons:any
  clicked:Function;
  changed:Function;
  name?:string;
  age?:number;
  id?:number;
  isAuthenticated?:boolean;
  
}


class Persons extends PureComponent<prop>{

  // static getDerivedStateFromProps(props:any,state:any){
  //   console.log('[Persons.tsx]getDerivedStateFromPros');
  //   return state;
  // }
  // shouldComponentUpdate(nextProps:any, nextState:any){
  //   console.log('[Persons.tsx]getDerivedStateFromPros');
  //  if (nextProps.persons !==this.props.persons ||nextProps.changed !==this.props.changed|| nextProps.clicked !== this.props.clicked)
  //  {
  //    return true;

  //  }else{
  //    return false;
  //  }
  // }
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
    
    return (
      
      
        this.props.persons.map((person:prop,index:number) =>{
        
            return   (
             <Person
                click={()=>this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key = {person.id}
                changed={(event:Event)=>this.props.changed(event, person.id)}
                
               /> 
            );
        })



      

      

    );
    
  }
    


}
export default Persons;