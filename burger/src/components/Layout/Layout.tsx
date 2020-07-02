import React from 'react';
import Auxilary from '../../hoc/Auxilary' ;
import classes from './Layout.module.css';


 interface LayoutProps {
    children:React.ReactNode;
}



const layout = (props:LayoutProps) => (
    <Auxilary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilary>
); 



export default layout;

