import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildContols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const INGREDIENT_PRICES = {
    salad:5000,
    chicken:7000,
    cheese:3000,
    meat:8000
}

class BurgerBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients:{
                salad:0,
                chicken:0,
                cheese:0,
                meat:0
            },
            totalPrice:3000,
            purchasable:false,
            purchasing:false
        };
        this.updatePurchaseState = this.updatePurchaseState.bind(this);
    }

    purchaseHandler = ()=>{
        let purchasingState = this.state.purchasing;
        if(purchasingState === false){
            this.setState({purchasing:true});
        }else{
            this.setState({purchasing:false})
        }
        
    }
    updatePurchaseState = (updateIngredients)=>{
        const ingredients = {
            ...updateIngredients
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0);
        this.setState({purchasable:sum > 0});
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice , ingredients:updateIngredients
            });
        console.log(newPrice);
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount>0){
        const updatedCount = oldCount -1;
        const updateIngredients = {...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({
            totalPrice: newPrice , ingredients:updateIngredients
        });
        console.log(oldPrice);
        this.updatePurchaseState(updateIngredients);
        }
        
    }

    render(){
        const disabledInfoMinus = {...this.state.ingredients};
        for (let key in disabledInfoMinus){
            disabledInfoMinus[key] = disabledInfoMinus[key] <=0 ;
            
        }
        const disabledInfoPlus = {...this.state.ingredients};
        for (let key in disabledInfoPlus){
            disabledInfoPlus[key] = disabledInfoPlus[key] >= 3 ;
            console.log(disabledInfoPlus[key])
        }
        return (
            <Aux>
                <Toolbar/>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
                    <OrderSummary  ingredients={this.state.ingredients} cancelled={this.purchaseHandler} totalPrice={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls  
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemove={this.removeIngredientHandler}
                disabledMinus={disabledInfoMinus}
                disabledPlus={disabledInfoPlus}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchasing={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;