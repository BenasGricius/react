import React,{MouseEvent} from 'react';
import classes from './Button.module.css'

interface ButtonProps{
    clicked: ((event: React.MouseEvent) => void);   
    
    children?:React.ReactNode;
    btnType:string;
    


}


const Button =(props:ButtonProps)=>(
    <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}
        
    </button>
);

export default Button;

