import React,{Component} from 'react';
import './Person.css';
import styled from 'styled-components';


  
interface prop  {
    name?:string;
    age?:number;
    children?:string;
    otherState?:any;
    click?:any;
    changed?:any;
    key?:number;
   

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

class Person extends Component<prop>{
    constructor(props:prop){
    super(props);
        this.state={

        };
    
    }
    render(){
        
        console.log('[Person.tsx] rendering...')
        
        return (
            // <div className="Person" style = {style}>
            
            
            <StyleDiv>
                <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years Old!</p>
                <p>{this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </StyleDiv>
        )
        
    }
    

}

export default Person;