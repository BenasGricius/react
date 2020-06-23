import React,{} from 'react';
import './UserOutput.css';
type User ={
    userName:string;
}



const userOutput=(props:User)=>{
    return(
        <div className="UserOutput">
            <p> Username:{props.userName} </p>
            <p>I hope  I'll be overwritten!</p>

        </div>
    )
}

export default userOutput;