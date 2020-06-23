import React,{} from 'react';
// import './Person.css';
import styled from 'styled-components';


  
type Person = {
    name:string;
    age:number;
    children?:string;
    otherState?:any;
    click?:any
    changed?:any

}

const StyleDiv = styled.div`
    width: 60%;
    margin: auto;
    border:1px solid blue ;
    padding: 16px;
    text-align: center;

    @media(min-width:500px){
        width:450px;
    }
      

`;

const person =(props:Person)=>{

    // const style:any = {
    //     '@media(min-width:500px)':{
    //         width:'450px'

    //     }
    // };
    return (
    // <div className="Person" style = {style}>
    
    
    <StyleDiv>
        <p onClick={props.click} > I'm a {props.name} and I am {props.age} years Old!</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyleDiv>
    )
}

export default person;