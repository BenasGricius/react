import React from 'react';
import person from '../components/Persons/Person/Person';

// interface WPProps {
//     children: React.ReactNode;
//     className: string;
//   }
  
//   const withClass: React.FC<WPProps> = (props) => (
//     <div className={props.className}>{props.children}</div>
//   );


const withClass:Function=(WrappedComponent:typeof person, className:string)=>{
    return (props: typeof person)=>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )

}
    



export default withClass;