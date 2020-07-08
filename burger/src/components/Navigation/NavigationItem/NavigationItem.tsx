import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css'


interface NavigationItemProps {
    exact?: boolean | undefined;  
    
    children:string;
    link:string;   
    active?:boolean;   


}


const navigationItem = (props:NavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <NavLink 
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}  
        >{props.children}
        </NavLink>
    </li>
);

export default navigationItem;