import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

function LinkButton(props) {
    return (
        <div className={`link-button ${props.className}`}>
            <Link to={props.to}>
                {props.text}
            </Link>
        </div>
    );
}

export default LinkButton;