
import React from 'react';
import Burger, { Ingredient } from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

interface CheckoutSummaryProps{
    checkoutContinued: (event: React.MouseEvent<Element, MouseEvent>) => void;
    checkoutCancelled: (event: React.MouseEvent<Element, MouseEvent>) => void;
    ingredients: Ingredient;
  
}




const checkoutSummary=(props:CheckoutSummaryProps)=>{
    return (
        <div className = {classes.CheckoutSummary} >
            <h1> We hope it tastes well!</h1>
            <div style = {{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>            
                <Button btnType="Danger" clicked={props.checkoutCancelled} >CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutContinued} >CONTINUE</Button>
            </div>
        </div>
    )

}

export default checkoutSummary;