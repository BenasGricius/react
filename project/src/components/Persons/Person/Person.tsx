import React,{Component} from 'react';
import classes from './Person.module.css';
import styled from 'styled-components';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

  
interface prop  {
    name?:string;
    age?:number;
    children?:string;
    otherState?:any;
    click?:any;
    changed?:any;
    key?:number;
    isAuth:boolean;
   

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
   
    // static contextType=AuthContext;
    // componentDidMount(){
    //     this.inputElementRef.current.focus();
    //     console.log(this.context.authenticated)
    // }


    render(){
        
        console.log('[Person.tsx] rendering...')
        
        return (
            // <div className="Person" style = {style}>
            
            <Auxilary>

                <AuthContext.Consumer>
                    {(context)=>context.authenticated ? <p>Authenticated!</p>:<p>Please log in</p>}
                </AuthContext.Consumer>
                
                <StyleDiv>
                    
                    <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years Old!</p>
                    <p>{this.props.children} </p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </StyleDiv>
            </Auxilary>
        )
        
    }
    

}

export default withClass (Person, classes.Person);