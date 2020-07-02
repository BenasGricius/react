import React,{MouseEvent} from 'react';
import Auxilary from '../../../hoc/Auxilary';
import { Ingredient } from '../Burger';
import Button from '../../UI/Button/Button';

interface OrderSummaryProps{
      purchaseCancelled: (event: React.MouseEvent) => void;
      purchaseContinued: (event:  React.MouseEvent) => void;     
   
      ingredients:Ingredient,
    

}

const orderSummary = (props:OrderSummaryProps)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return (<li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey as keyof Ingredient ]}
                </li>);
    });
    

    return(
        <Auxilary>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                 {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked = {props.purchaseContinued}>CONTINUE</Button>

        </Auxilary>
    );

};

export default orderSummary;