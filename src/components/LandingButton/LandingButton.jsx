import React from 'react';
import './LandingButton.css';

const LandingButton = (props) => {
    return(
        <button className="button">
            {props.text}
        </button>
    )
}

export default LandingButton;