import React from 'react';
import classes from '../BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';



interface BuildControlsProps {
    ingredientAdded:Function;
    ingredientRemoved:Function;
    disabled:{[key:string]:boolean|number};
    price:number;
    purchasable:boolean;
    ordered:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

const controls=[
    {label:'Salad', type:'salad' },
    {label:'Bacon', type:'bacon' },
    {label:'Cheese', type:'cheese' },
    {label:'Meat', type:'meat' },
]

const buildControls = (props:BuildControlsProps)=>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key = {ctrl.label} 
            label={ctrl.label}           
            added={() =>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            
            
            />
        ))}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>
        
    </div>

); 

export default buildControls