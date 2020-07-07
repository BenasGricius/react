import React,{Component} from 'react';
import { RouteComponentProps } from "react-router-dom";
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';



const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

interface  addProps{
    salad:string,
    bacon:string,
    cheese:string,
    meat:string,
    
}

interface Ingredient{
    salad:number;
    bacon:number;
    cheese:number;
    meat:number;
    
}

interface CheckoutProps extends RouteComponentProps{

    checkoutCancelled: History;
    checkoutContinued: History;
}




class BurgerBuilder extends Component<RouteComponentProps>{
    

    state={
        ingredients:{} as Ingredient,
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false,
    } 

    componentDidMount(){
        axios.get('https://react-my-burger-7309b.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data})
        })
        .catch(error =>{
            this.setState({error:true})
        });
    }

    updatePurchaseState(ingredients:Ingredient){
  
        const sum=Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey as keyof Ingredient ];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
    }

  


    addIngredientHandler = (type: keyof addProps)=>{
        const oldCount= this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type: keyof addProps)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice = oldPrice-priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }
    purchaseHandler =()=>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler=()=>{
        // // alert('You continue');
        // this.setState(
        //     {loading:true}
        // );
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'Benas Gricius',
        //         address:{
        //             street:'Klaipedos 1',
        //             zipCode:'41351',
        //             country:'Germany',
        //         },
        //         email:"Test@Test.com",
        //     },
        //     deliveryMethood:'fastest'   
            
        // }

        // axios.post('/orders.json', order)
        // .then(response=>{
        //     this.setState({loading:false,purchasing:false})
        // })
        // .catch(error=>{
        //     this.setState({loading:false, purchasing:false});
        // });
        
        this.props.history.push('/checkout');
    }

    render(){
        const disabledInfo:{[key:string]:number|boolean} ={
            ...this.state.ingredients
        };
        
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        let orderSummary=null;      
       
        let burger=this.state.error? <p>Ingredients cant be loaded!</p>:<Spinner/>

        if(this.state.ingredients){
            burger=(
                <Auxilary>
                    <Burger ingredients = {this.state.ingredients}/>           
                    <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
                    
                </Auxilary>
    
            );
            orderSummary=<OrderSummary         
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />; 
           

        }
        if(this.state.loading){
            orderSummary=<Spinner/>;
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


export default withErrorHandler(BurgerBuilder,axios);