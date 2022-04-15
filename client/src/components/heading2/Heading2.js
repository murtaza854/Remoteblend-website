import React from 'react';
import './Heading2.scss';

function Heading2(props) {
    return (
        <h1 className={`heading2 ${props.className}`}>
            {props.firstLine}{props.seconeLine !== "" ? <br /> : ""}
            {props.seconeLine}{props.thirdLine !== "" ? <br /> : ""}
            {props.thirdLine}{props.fourthLine !== "" ? <br /> : ""}
            {props.fourthLine}
        </h1>
    );
}

export default Heading2;