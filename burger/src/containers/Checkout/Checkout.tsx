import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Ingredient } from '../../components/Burger/Burger';
import {Route,RouteComponentProps} from 'react-router-dom';
import ContactData from './ContactData/ContactData';




interface CheckoutProps extends RouteComponentProps{

    checkoutCancelled: History;
    checkoutContinued: History;
    
}



class Checkout extends Component<CheckoutProps>{
    
    state={
        ingredients:{} as Ingredient,
        totalPrice:0
          
    }

    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients = {} as Ingredient;
        let price=0;
        for (let param of query.entries()){

            if(param[0]==="price"){
                price=+param[1]

            }else{
                ingredients[param[0]]=+param[1]
            }
            

        }
        this.setState({ingredients:ingredients, totalPrice:price});
    }



    checkoutCancelledHandler=()=>{
        this.props.history.goBack();

    }


    checkoutContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');

    }



    render(){
        return(
            <div>
                <CheckoutSummary
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}  
                ingredients={this.state.ingredients}/>
                <Route path ={this.props.match.path+'/contact-data'}
                render={(props)=> (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}{...props}/>)}/>
            </div>
        )
    }

};

export default Checkout;
