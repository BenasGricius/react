// import {Ingredient} from '../containers/BurgerBuilder/BurgerBuilder';

import { Ingredient } from "../../containers/BurgerBuilder/BurgerBuilder";
import { OrdersProps } from "../../containers/Orders/Orders";




// export const ADD_INGREDIENT = "ADD_INGREDIENT";

// export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";



export enum EnumActionTypes {

    ADD_INGREDIENT,  
    REMOVE_INGREDIENT,  
    SET_INGREDIENTS,  
    FETCH_INGREDIENTS_FAILED,   
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAIL,  
    PURCHASE_BURGER_START,  
    PURCHASE_INIT,  
    FETCH_ORDERS_START,  
    FETCH_ORDERS_SUCCESS,  
    FETCH_ORDERS_FAIL,  
}
  
  
  
export interface AddIngredientAction {
  
    type: EnumActionTypes.ADD_INGREDIENT;  
    // payload: Ingredient;  
    ingredientName: keyof Ingredient;
    // ingredients:Ingredient
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
  
}
  
  
  
export interface RemoveIngredientAction {
  
    type: EnumActionTypes.REMOVE_INGREDIENT;  
    // ingredientType: string;  
    ingredientName: keyof Ingredient;
    // ingredients?:Ingredient
    // ingredients:Ingredient
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
  
}


export interface SetIngredientsAction{
    
    type: EnumActionTypes.SET_INGREDIENTS  
    ingredients:Ingredient
    // ingredientName: keyof Ingredient;
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]

}

export interface FetchIngredientsFailedAction{
    type: EnumActionTypes.FETCH_INGREDIENTS_FAILED
  
    ingredientName: keyof Ingredient;
    // ingredients:Ingredient
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}


export interface PurchaseBurgerSuccessAction{
    
    orderData: [];
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.PURCHASE_BURGER_SUCCESS
    orderId:number
    orders:OrdersProps[]
    
   
}


export interface PurchaseBurgerFailAction{
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.PURCHASE_BURGER_FAIL
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}

export interface PurchaseBurgerStartAction{
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.PURCHASE_BURGER_START
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}

export interface PurchaseInitAction{
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.PURCHASE_INIT
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}

export interface FetchOrdersSuccessAction{
    
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.FETCH_ORDERS_SUCCESS
    // orderData: [];
    // orderId:number
    orders:OrdersProps[]
}

export interface FetchOrdersFailAction{
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.FETCH_ORDERS_FAIL
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}


export interface FetchOrdersStartAction{
    // ingredients:Ingredient
    ingredientName: keyof Ingredient;
    type:EnumActionTypes.FETCH_ORDERS_START
    // orderData: [];
    // orderId:number
    // orders:OrdersProps[]
}




export type UActions =

  | AddIngredientAction
  | RemoveIngredientAction
  | SetIngredientsAction
  | FetchIngredientsFailedAction
  | PurchaseBurgerSuccessAction
  | PurchaseBurgerFailAction
  | PurchaseBurgerStartAction
  | PurchaseInitAction
  | FetchOrdersSuccessAction
  | FetchOrdersFailAction
  | FetchOrdersStartAction;


