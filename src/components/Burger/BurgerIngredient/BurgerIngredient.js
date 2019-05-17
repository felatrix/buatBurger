import React from 'react';
import PropTypes from 'prop-types';

import Classes from './BurgerIngredient.css';

class BurgerIngredient extends React.Component {
    render(){
        let ingredient = null;

        switch(this.props.type){
            case('bread-bottom'):
                ingredient = <div className={Classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = <div className={Classes.BreadTop}></div>;
                break;
            case('seeds1'):
                ingredient = <div className={Classes.Seeds1}></div>;
                break;
            case('seeds2'):
                ingredient = <div className={Classes.Seeds2}></div>;
                break;
            case('meat'):
                ingredient = <div className={Classes.Meat}></div>;
                break;
            case('cheese'):
                ingredient = <div className={Classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className={Classes.Salad}></div>;
                break;
            case('chicken'):
                ingredient = <div className={Classes.Chicken}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;