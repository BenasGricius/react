import React from 'react';

const validation = (props:any) => {
    let validationMessage='Text long enought';

    if (props.inputLenght <= 5){
        validationMessage = 'Text to short';
    }


    return(
        <div>
            {
               <p>{validationMessage}</p>
            }
        </div>
    );

};


export default validation;