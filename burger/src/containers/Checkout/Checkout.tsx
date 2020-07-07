import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps } from 'react-router-dom';

interface CheckoutProps extends RouteComponentProps{

    checkoutCancelled: History;
    checkoutContinued: History;
}



class Checkout extends Component<CheckoutProps>{
    state={
        ingredients:{
            salad:1,
            meat:1,
            cheese:1,
            bacon:1,
        }
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
            </div>
        )
    }

};

export default Checkout;
