import { Ingredient } from "../../containers/BurgerBuilder/BurgerBuilder";
import {
  EnumActionTypes,
  UActions,
  AddIngredientAction,
  RemoveIngredientAction,
  SetIngredientsAction,
} from "../actions/actionTypes";
import { updateObject } from "./utility";

export interface ActionTypeProps {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}

export interface InitialStateProps {
  // order: OrderData;
  loading?: boolean;
  error: boolean;
  // burgerBuilder:BurgerBuilderProps;
  ingredients: ActionTypeProps;
  totalPrice: number;
}

const initialState = {
  ingredients: {
    // salad:0,
    // bacon:0,
    // cheese:0,
    // meat:0,
  } as ActionTypeProps,

  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES: Ingredient = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (
  state: InitialStateProps,
  action: AddIngredientAction
) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (
  state: InitialStateProps,
  action: RemoveIngredientAction
) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedSt);
};
const setIngredients = (
  state: InitialStateProps,
  action: SetIngredientsAction
) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};
const fetchIngredientsFailed = (state: InitialStateProps) => {
  return updateObject(state, { error: true });
};

const reducer = (state: InitialStateProps = initialState, action: UActions) => {
  switch (action.type) {
    case EnumActionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case EnumActionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case EnumActionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case EnumActionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state);
    default:
      return state;
  }
};

export default reducer;
