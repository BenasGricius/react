import *as actionTypes from '../actions/actionTypes';
import {updateObject} from './utility';
import { FetchOrdersSuccessAction, PurchaseBurgerSuccessAction } from '../actions/actionTypes';


interface stateInt{
    orders:Object[]
    loading:boolean
    purchased:boolean
}


const initialState={
    orders:[],
    loading:false,
    purchased:false
};


const purchaseInit = (state:typeof initialState )=>{
    return updateObject(state,{purchased:false});      
}

const purchaseBurgerStart = (state:typeof initialState)=>{
    return updateObject(state,{loading:true});
}

const purchaseBurgerSuccess=(state:stateInt, action:PurchaseBurgerSuccessAction)=>{
    const newOrder= updateObject(action.orderData,{id: action.orderId});              
            return updateObject(state,{
                ...state,
                loading:false,
                purchased:true,
                orders:state.orders.concat(newOrder)
            });

}
const purchaseBurgerFail = (state:typeof initialState)=>{
    return updateObject(state,{loading:false}); 
}

const fetchOrdersStart =(state:typeof initialState)=>{
    return updateObject(state,{loading:true});  
}


const fetchOrdersSuccess=(state:typeof initialState, action:FetchOrdersSuccessAction)=>{
    return updateObject(state,{                
        orders: action.orders,
        loading:false
    }); 
}


const fetchOrdersFail=(state: typeof initialState)=>{
    return updateObject(state,{loading:false}); 
}

const reducer =(state=initialState, action:actionTypes.UActions)=>{
    switch (action.type){
        case actionTypes.EnumActionTypes.PURCHASE_INIT: return purchaseInit(state);                   
        case actionTypes.EnumActionTypes.PURCHASE_BURGER_START:return purchaseBurgerStart(state);            
        case actionTypes.EnumActionTypes.PURCHASE_BURGER_SUCCESS:return purchaseBurgerSuccess(state,action);           
        case actionTypes.EnumActionTypes.PURCHASE_BURGER_FAIL:return purchaseBurgerFail(state);                       
        case actionTypes.EnumActionTypes.FETCH_ORDERS_START:return fetchOrdersStart(state);                       
        case actionTypes.EnumActionTypes.FETCH_ORDERS_SUCCESS:return fetchOrdersSuccess(state,action);           
        case actionTypes.EnumActionTypes.FETCH_ORDERS_FAIL:return fetchOrdersFail(state);              
        default:
            return state;
    }

}


export default reducer;