import React from 'react';

import classes from './NavigationItem.module.css'


interface NavigationItemProps {  
    
    children:string;
    link:string;   
    active?:boolean;   


}


const navigationItem = (props:NavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <a 
        href={props.link}
        className={props.active ? classes.active: undefined}
        >{props.children}
        </a>
    </li>
);

export default navigationItem;