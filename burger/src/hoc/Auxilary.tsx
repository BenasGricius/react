
import React from 'react'

 interface AuxProps  { 
    children: React.ReactNode;
 }

 const auxilary: React.FC<AuxProps> = (props) => <>{props.children}</>;


export default auxilary;