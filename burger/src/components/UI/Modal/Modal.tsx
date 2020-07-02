import React,{MouseEvent} from 'react';
import classes from './Modal.module.css';
import Auxilary from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

interface Modalprops{
    modalClosed: ((event: React.MouseEvent) => void);   
    children?:React.ReactNode,
    show?:boolean;
    

}


const modal = (props:Modalprops)=>(
    <Auxilary>
        <Backdrop show={props.show} clicked = {props.modalClosed}/>
        <div className={classes.Modal}
        style={{
            transform:props.show ? 'translateY(0)':'translateY(-100vh)',
            opacity:props.show ?'1':'0'
        }}
        
        >
            {props.children}
        </div>
    </Auxilary>
);  


export default modal;