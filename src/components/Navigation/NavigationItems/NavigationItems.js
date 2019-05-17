import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem pathNav="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem pathNav="/" active={true}>CheckOut</NavigationItem>
    </ul>
);

export default navigationItems;