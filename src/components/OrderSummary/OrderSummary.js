import React from 'react';
import Aux from '../../hoc/Aux';
import ButtonSummary from '../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                            .map(igKey => {
                                return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
                            })
    return (
        <Aux>
            <h3>Orderan Kamu</h3>
            <p> Isi burgernyaa : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Harga Total:Rp.{props.totalPrice}</strong></p>
            <p>Mau checkout ?</p>
            <ButtonSummary clicked={props.cancelled} btnType="Danger">Ntar dulu</ButtonSummary>
            <ButtonSummary clicked={()=>{console.log('ya')}} btnType="Success">Oke Lanjut</ButtonSummary>
        </Aux>
    )
};

export default orderSummary;