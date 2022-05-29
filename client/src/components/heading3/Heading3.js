import React from 'react';
import './Heading3.scss';

function Heading3(props) {
    return (
        <h1 className={`heading3 ${props.className}`}>
            {props.firstLine}{props.seconeLine !== "" ? <br /> : ""}
            {props.secondLineColor ? <span>{props.secondLineColor} </span> : ''}{props.seconeLine}{props.thirdLine !== "" ? <br /> : ""}
            {props.thirdLine}{props.fourthLine !== "" ? <br /> : ""}
            {props.fourthLine}
        </h1>
    );
}

export default Heading3;