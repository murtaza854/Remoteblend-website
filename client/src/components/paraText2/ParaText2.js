import React from 'react';
import './ParaText2.scss';

function ParaText2(props) {
    return (
        <p className={`paratext2 ${props.className}`}>
            {props.firstLine}{props.seconeLine !== "" ? <br /> : ""}
            {props.seconeLine}{props.thirdLine !== "" ? <br /> : ""}
            {props.thirdLine}{props.fourthLine !== "" ? <br /> : ""}
            {props.fourthLine}
        </p>
    );
}

export default ParaText2;