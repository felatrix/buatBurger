import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Chicken',type:'chicken'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];

const BuildControls = (props)=>{
    return <div className={Classes.BuildControls}>
        <p>Harga : Rp.{props.price}</p>
        {controls.map(ctrl => (
            <BuildControl 
            added={()=>props.ingredientAdded(ctrl.type)} 
            remove={()=>props.ingredientRemove(ctrl.type)}
            key={ctrl.label}
            type={ctrl.type}  
            label={ctrl.label}
            disabledMinus={props.disabledMinus[ctrl.type]}
            disabledPlus={props.disabledPlus[ctrl.type]}
            />
        ))}
        <button className={Classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>Order</button>
    </div>
}

export default BuildControls;