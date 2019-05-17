import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) =>
    (   
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.remove} disabled={props.disabledMinus}>-</button>
            <button className={classes.Less} onClick={props.added} disabled={props.disabledPlus}>+</button>
            <div>(Maksimal 3 lapis)</div>
        </div>
    )
;

export default buildControl;