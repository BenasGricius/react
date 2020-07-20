import React, {Component} from 'react';
import Order, { OrderProps } from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {Ingredient} from '../BurgerBuilder/BurgerBuilder'
import { Dispatch } from 'redux';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import { OrderData } from '../Checkout/ContactData/ContactData';


export interface OrdersProps{
  id:string; 
  price:string;  
  ingredients: Ingredient;
  onFetchOrders:Function;
  
 

}
interface OrdersState extends OrdersProps {
      

    orders:OrdersProps[] ;
    loading: boolean;
    order:OrderData;
    
  
  }


class Orders extends Component<OrdersState> {

    // state={
    //     orders:[] as OrdersProps[],
    //     loading:true,
        
    // }

    componentDidMount(){
        // axios.get('/orders.json')
        // .then(res=>{
        //     const fetchedOrders: OrdersProps[] = [];
        //     for (let key in res.data){
                
        //         fetchedOrders.push({...res.data[key],
        //             id:key
        //     });
        // }
        //     this.setState({loading:false, orders:fetchedOrders});

        // })
        // .catch (err => {
        //     this.setState({loading:false});
        // });

        this.props.onFetchOrders();

    }
    render (){
    let orders=[<Spinner/>];
        if (!this.props.loading){
            orders=this.props.orders.map(order=>(
                <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}
                />
            ));
        }
        return(
            <div>
                {orders}
            </div>
           
        );
    }
}

const mapStateToProps=(state:OrdersState)=>{
    return{
        orders:state.order.orders,
        loading:state.order.loading
    }
}

const mapDispatchtoProps=(dispatch:Dispatch)=>{
    return{
        onFetchOrders:()=>dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps) (withErrorHandler (Orders, axios));