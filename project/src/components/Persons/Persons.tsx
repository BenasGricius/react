
import React,{PureComponent} from 'react';

import Person from './Person/Person';

interface Pprop{
  persons:typeof Person;
  clicked:Function;
  changed:Function;
  name?:string;
  age?:number;
  id?:number;
  isAuthenticated?:boolean;
  
}



class Persons extends PureComponent<Pprop>{

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
  getSnapshotBeforeUpdate(prevProps:Pprop, prevState:Pprop){
    console.log ('[Persons.tsx] getSnapshotBeforeUpdate');
  }


  componentDidUpdate(){
    console.log('[PErsons.tsx] componentDidUpdate')
  }

  componentWillUnmount(){
    console.log ('PErsons.tsx] componentWillUnmount')
  }



  constructor(props:Pprop){
  super(props)
  }
  render(){
    console.log('[Persons.tsx] rendering...');
    
    return (
      
      
        this.props.persons.map((person:typeof Person,index:number) =>{
        
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