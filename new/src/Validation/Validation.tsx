import React from 'react';

const validation = (props:string) => {
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