// import {Ingredient} from '../containers/BurgerBuilder/BurgerBuilder';

import { Ingredient } from "../containers/BurgerBuilder/BurgerBuilder";



// export const ADD_INGREDIENT = "ADD_INGREDIENT";

// export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";



export enum EnumActionTypes {

    ADD_INGREDIENT,  
    REMOVE_INGREDIENT,  
    // SET_INGREDIENTS,  
    // FETCH_INGREDIENTS_FAILED,   
    // PURCHASE_BURGER_SUCCESS,
    //   PURCHASE_BURGER_FAIL,  
    // PURCHASE_BURGER_START,  
    // PURCHASE_INIT,  
    // FETCH_ORDERS_START,  
    // FETCH_ORDERS_SUCCESS,  
    // FETCH_ORDERS_FAIL,  
}
  
  
  
export interface AddIngredientAction {
  
    type: EnumActionTypes.ADD_INGREDIENT;  
    // payload: Ingredient;  
    ingredientName: keyof Ingredient;
  
}
  
  
  
export interface RemoveIngredientAction {
  
    type: EnumActionTypes.REMOVE_INGREDIENT;  
    // ingredientType: string;  
    ingredientName: keyof Ingredient;
  
}

export type UActions =

  | AddIngredientAction
  | RemoveIngredientAction

//   | SetIngredientsAction
//   | FetchIngredientsFailedAction
//   | PurchaseBurgerSuccessAction
//   | PurchaseBurgerFailAction
//   | PurchaseBurgerStartAction
//   | PurchaseInitAction
//   | FetchOrdersSuccessAction
//   | FetchOrdersFailAction
//   | FetchOrdersStartAction;


