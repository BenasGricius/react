import React,{MouseEvent} from 'react';
import classes from './Backdrop.module.css'


interface BackDropProps{
    clicked: ((event: React.MouseEvent) => void);    
    show?:boolean;
    // clicked:any
    

}


const Backdrop = (props:BackDropProps) => (
    props.show?(<div className={classes.Backdrop} onClick={props.clicked}></div>):null
);

export default Backdrop;

