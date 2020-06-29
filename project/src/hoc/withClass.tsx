import React from 'react';


const withClass=(WrappedComponent:any, className:any)=>{
    return (props:any)=>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )

}
    



export default withClass;