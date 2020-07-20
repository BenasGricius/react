import React,{Component} from 'react';
import {RouteComponentProps} from "react-router-dom";
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import {connect, MapStateToProps} from 'react-redux';
import {Dispatch} from 'redux';

import { InitialStateProps } from '../../store/reducers/burgerBuilder';
import * as burgerBuilderActions from '../../store/actions/index';
import { MapsStateToProps } from '../Checkout/Checkout';





// interface  addProps{
//     salad:string,
//     bacon:string,
//     cheese:string,
//     meat:string,
    
    
// }

 export interface Ingredient{
    salad:number;
    bacon:number;
    cheese:number;
    meat:number;
    [key: string]: number;
    
    
}

// interface CheckoutProps extends RouteComponentProps{    
//     index?:number
    
// }

interface BurgerBuilderState{
    // ingredients?: Ingredient;
    // totalPrice?: number;
    purchasing?:boolean;
    loading?:boolean;
    error?:boolean;
}
export interface BurgerBuilderProps extends RouteComponentProps{
   ings:Ingredient;
   price:number; 
   onIngredientAdded: () => void;
   onIngredientRemoved:() => void;
   onInitIngredients:() => void;
   onInitPurchase:() => void;
   index?:number
   error:boolean;
   totalPrice:number;
   ingredients:Ingredient
}

 export class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState>{
    

    state={
        // ingredients:{} as Ingredient,      
        purchasing:false,
       
        
    } 

    componentDidMount(){
        this.props.onInitIngredients();
   
    }

    updatePurchaseState(ingredients:Ingredient){
  
        const sum=Object.keys(ingredients).map(igKey=>{
                return ingredients[igKey as keyof Ingredient ];
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0);
        return sum>0;
    }

  


    // addIngredientHandler = (type: keyof addProps)=>{
    //     const oldCount= this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition=INGREDIENT_PRICES[type];
    //     const oldPrice=this.state.totalPrice;
    //     const newPrice = oldPrice+priceAddition;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type: keyof addProps)=>{
    //     const oldCount=this.state.ingredients[type];
    //     if(oldCount<=0){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1 ;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition=INGREDIENT_PRICES[type];
    //     const oldPrice=this.state.totalPrice;
    //     const newPrice = oldPrice-priceAddition;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);

    // }
    purchaseHandler =()=>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler=()=>{
        this.props.onInitPurchase();              

        this.props.history.push('/checkout')
        
    }

    render(){
        const disabledInfo:{[key:string]:number|boolean} ={
            ...this.props.ings
        };
        
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        let orderSummary=null;      
       
        let burger=this.props.error? <p>Ingredients cant be loaded!</p>:<Spinner/>

        if(this.props.ings){
            burger=(
                <Auxilary>
                    <Burger ingredients = {this.props.ings}/>           
                    <BuildControls
                    ingredientAdded = {this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    price={this.props.price}/>
                    
                </Auxilary>
    
            );
            orderSummary=<OrderSummary         
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />; 
           

        }
      
        
        return(
            <Auxilary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                    
                </Modal>
                {burger}
            </Auxilary>
        );
    }
}

const mapStateToProps=(state:MapsStateToProps)=>{
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    };    
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onIngredientAdded:(ingName:string)=>dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved:(ingName:string)=>dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients:()=>dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase:()=>dispatch(burgerBuilderActions.purchaseInit())
    }   
}


export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));