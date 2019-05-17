import React from 'react';

import burgerLogo from '../../assets/images/logo_burger.png'; 
import classes from './Logo.css';

const logo = (props)=>(
    <div className={classes.Logo} >
        <img src={burgerLogo} alt="logoburger" />
    </div>
);

export default logo;