import React,{} from 'react';
import './Person.css';
  
type Person = {
    name:string;
    age:number;
    children?:string;
    otherState?:any;
    click?:any
    changed?:any

}

const person =(props:Person)=>{
    return (
    <div className="Person">
        <p onClick={props.click} > I'm a {props.name} and I am {props.age} years Old!</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;