import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredient } from "../../components/Burger/Burger";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import ContactData, { OrderData } from "./ContactData/ContactData";
import { connect } from "react-redux";
import { InitialStateProps } from "../../store/reducers/burgerBuilder";
import { BurgerBuilderProps } from "../BurgerBuilder/BurgerBuilder";

interface CheckoutProps extends RouteComponentProps {
  ings: Ingredient;
  onInitPurchase: Function;
  purchased?: boolean;
}

class Checkout extends Component<CheckoutProps> {
  // state={
  //     ingredients:{} as Ingredient,
  //     totalPrice:0

  // }

  // componentWillMount(){
  //     const query=new URLSearchParams(this.props.location.search);
  //     const ingredients = {} as Ingredient;
  //     let price=0;
  //     for (let param of query.entries()){

  //         if(param[0]==="price"){
  //             price=+param[1]

  //         }else{
  //             ingredients[param[0]]=+param[1]
  //         }

  //     }
  //     this.setState({ingredients:ingredients, totalPrice:price});
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}

          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

export interface MapsStateToProps {
  order: OrderData;
  burgerBuilder: BurgerBuilderProps;
  loading: boolean;
  error: boolean;
}

const mapStateToProps = (state: MapsStateToProps) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
