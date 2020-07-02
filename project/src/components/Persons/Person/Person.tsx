import React,{Component, MouseEvent,ChangeEvent} from 'react';
import classes from './Person.module.css';
import styled from 'styled-components';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

  
export interface Prop  {
    id?:string;
    name?:string;
    age?:number;
    children?:React.ReactNode;
    otherState?:Function;
    click?:((event: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void);
    changed?:(event: ChangeEvent<HTMLInputElement>) => void;
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

export class Person extends Component<Prop>{
    constructor(props:Prop){
        
    super(props);
     
        this.state={

        };
   
    } 
   
    // componentDidMount(){
    //     this.inputElement.focus();
    // } 
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
                    <input type="text"
                    onChange={this.props.changed}
                    // ref = {(inputEl)=>{this.inputElement = inputEl}} 
                    value={this.props.name}/>

                </StyleDiv>
            </Auxilary>
        )
        
    }
    

}

export default withClass (Person, classes.Person);