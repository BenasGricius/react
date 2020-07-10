import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {Ingredient} from '../../../components/Burger/Burger';
import { RouteComponentProps } from "react-router-dom";
import Input,{InputConfig} from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import {InitialStateProps} from '../../../store/reducer';

interface ContactDataProps extends RouteComponentProps{    
    ingredients:Ingredient;
    price:number;
    ings:Ingredient;

}


interface FormItemProps {

    elementType: string;  
    elementConfig: InputConfig;  
    value: string;  
    validation: Validation;  
    valid: boolean;  
    touched: boolean; 
    
    // [key: string]: string | SelectConfig | InputConfig;
  
}
// export interface SelectConfig {

//     [key: string]: InputConfig[];
    
//     options: Options[];
    
//     [key: string]: Array<InputConfig>;

// export interface InputConfig {

//     type: string;  
//     placeholder: string;  
//     options: Options[];
  
// }

export interface Options {

    value: string;  
    displayValue: string;  
}

interface Validation {
    maxLength: number;
    required: boolean;  
    minLength?: number;  
}

interface FormProps {

    name: FormItemProps;  
    street: FormItemProps;  
    zipCode: FormItemProps;  
    country: FormItemProps;  
    email: FormItemProps;  
    deliveryMethod: FormItemProps;  
    // [key: string]: FormItemProps;
  
  }
  
  
  
  interface CState {  
    orderForm: FormProps;  
    loading: boolean;  
    formIsValid: boolean;  
  }

class ContactData extends Component<ContactDataProps, CState>{

    state={
        orderForm:{          
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            } as FormItemProps,               
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            }as FormItemProps,
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CDE'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5,
                
                },
                valid:false,
                touched:false
            }as FormItemProps,
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            }as FormItemProps,                
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            }as FormItemProps,

            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                   options:[
                       {value:'fastest',displayValue:'Fastest'},
                       {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value:'',
                validation:{},
                valid:true

               
            }as FormItemProps,

        },
        formIsValid:false,
        loading:false
    }

    orderHandler=(event: { preventDefault: () => void; })=>{

        event.preventDefault();
         this.setState(
            {loading:true}
        );
        // const newKey={
        //     name:{} as FormItemProps,
        //     street:{} as FormItemProps,
        //     zipCode:{} as FormItemProps,
        //     country:{} as FormItemProps,
        //     email:{} as FormItemProps,
        //     deliveryMethod:{} as FormItemProps
        // }
        // type NewKey = keyof typeof newKey;

        //     let key: NewKey;
        const formData: { [element: string]: string }={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier as keyof FormProps]=this.state.orderForm[formElementIdentifier as keyof FormProps].value
        }
        const order={
            ingredients:this.props.ings,
            price:this.props.price,
            orderData:formData
             
            
        }

        axios.post('/orders.json', order)
        .then(response=>{
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error=>{
            this.setState({loading:false});
        });
        console.log(this.props.ingredients);
    }


    checkValidity(value: string, rules: Validation ){
        let isValid=true;
        if (rules.required){
            isValid=value.trim() !== '' && isValid;

        }
        if(rules.minLength){
            isValid=value.length>=rules.minLength && isValid
        }
        if(rules.maxLength){
            isValid=value.length<=rules.maxLength && isValid
        }
        return isValid;

    }

    inputChangedHandler=(event:React.ChangeEvent<HTMLFormElement>, inputIdentifier:string )=>{
        const updatedOrderForm={
            ...this.state.orderForm

        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier as keyof FormProps]
        };
        updatedFormElement.value=event.target.value;
        updatedFormElement.valid=this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched= true;
        updatedOrderForm[inputIdentifier as keyof FormProps]=updatedFormElement;
        
        let formIsValid=true;

        for(let inputIdentifier in updatedOrderForm){
            formIsValid=updatedOrderForm[inputIdentifier as keyof FormProps].valid && formIsValid;
        }

        this.setState({orderForm:updatedOrderForm, formIsValid:formIsValid});
    }


    render(){



        const formElementsArray=[];

        const newKey={
            name:{} as FormItemProps,
            street:{} as FormItemProps,
            zipCode:{} as FormItemProps,
            country:{} as FormItemProps,
            email:{} as FormItemProps,
            deliveryMethod:{} as FormItemProps
        }
        type NewKey = keyof typeof newKey;

            let key: NewKey;

        for( key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }


        let form=(
            <form onSubmit={this.orderHandler}>
             
                {formElementsArray.map(formElement=>(
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation?true:false}
                    touched={formElement.config.touched}
                    changed={(event:React.ChangeEvent<HTMLFormElement>)=>this.inputChangedHandler(event, formElement.id)}
                    />

                ))}


                <Button btnType = "Success" disabled={!this.state.formIsValid} >ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                {form}
                
            </div>
        )
    }

}

const mapStateToProps= (state:InitialStateProps)=>{
    return{
        ings:state.ingredients,
        price:state.totalPrice
    }
}


export default  connect(mapStateToProps)(ContactData);
