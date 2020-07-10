
import {Ingredient} from '../containers/BurgerBuilder/BurgerBuilder';
import {EnumActionTypes, UActions} from './actions';


interface ActionTypeProps{
 
    salad:number;
    bacon:number;
    cheese:number;
    meat:number;
    [key: string]: number;
}




export interface InitialStateProps{

ingredients:ActionTypeProps;
totalPrice:number;

}




const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
    },
    totalPrice:4
}

const INGREDIENT_PRICES: Ingredient={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

const reducer = (state:InitialStateProps=initialState,action:UActions )=>{
    switch(action.type){
        case EnumActionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            };
        case EnumActionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                totalPrice:state.totalPrice-INGREDIENT_PRICES[action.ingredientName]

            };    

    
    default:
        return state;
    }

}

export default reducer;