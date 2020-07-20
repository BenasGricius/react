
import {EnumActionTypes,AddIngredientAction,RemoveIngredientAction,SetIngredientsAction, FetchIngredientsFailedAction, UActions } from '../actions/actionTypes';
import axios from '../../axios-orders';
import { Dispatch } from 'redux';
import { ActionTypeProps } from '../reducers/burgerBuilder';
import { Ingredient } from '../../components/Burger/Burger';


export const addIngredient = (name: string): AddIngredientAction => {

    return {
  
      type: EnumActionTypes.ADD_INGREDIENT,  
      ingredientName: name,
     
  
    };
  
};
  
  
  
export const removeIngredient = (name: string): RemoveIngredientAction => {
  
    return {
  
      type: EnumActionTypes.REMOVE_INGREDIENT,  
      ingredientName: name,
  
    };
};

export const setIngredients=(ingredients:Ingredient): SetIngredientsAction=>{
    return{
        type: EnumActionTypes.SET_INGREDIENTS,    
        
        // ingredientName: name,
        ingredients: ingredients,

    };
};


export const fetchIngredientsFailed = ()=>{
    return{
        type:EnumActionTypes.FETCH_INGREDIENTS_FAILED
    };
};


export const initIngredients:Function =()=>{
    return (dispatch:Dispatch)=>{
        axios.get('https://react-my-burger-7309b.firebaseio.com/ingredients.json')
        .then (response=>{
            dispatch(setIngredients(response.data));
        })
        .catch((error:boolean) =>{
            dispatch(fetchIngredientsFailed());
        });

    };

};