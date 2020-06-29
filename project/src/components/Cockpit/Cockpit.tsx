import React,{useEffect, useRef, useContext} from 'react';
import classes from '../Cockpit/Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props:any)=>{
    const authContext=useContext(AuthContext);

    console.log(authContext.authenticated);

    // const toggleBtnRef = React.createRef();
    


    
     useEffect(()=>{
    console.log('[Cockpit.tsx] useEffect');
    //   setTimeout(()=>{
    //     alert('Saved data to cloud');
    // },1000);
    // toggleBtnRef.current.click();
    return ()=>{
       
        console.log('[Cockpit.tsx] cleanup work in UseEffect');

    };
    },[]);
        
    
    const assignedClasses = [];
        let btnClass = '';

        if (props.showPersons){
            btnClass=classes.Red;
            }
           
        if (props.persons.length<=2){
            assignedClasses.push(classes.red);
            }

        if (props.persons.length<=1){
            assignedClasses.push(classes.bold);
            }
    return(
        <div className={classes.Cockpit}>
            <h1>hello I am react project</h1>
             <p className= {assignedClasses.join(' ')}>This is really working!</p>
            <button 
               className={btnClass} 
                  
            onClick={props.clicked}>Switch name</button>
            {/* <AuthContext.Consumer>
               {context => <button onClick={context.login}>Log in</button>}
               
            </AuthContext.Consumer> */}
             
             <button onClick ={authContext.login}>Log in</button>
                 
        </div> 
    );
};

export default React.memo(Cockpit);