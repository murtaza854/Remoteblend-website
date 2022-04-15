import React from 'react';
import './ParaText3.scss';

function ParaText3(props) {
    return (
        <p className={`paratext3 ${props.className}`}>
            {props.firstLine}{props.seconeLine !== "" ? <br /> : ""}
            {props.seconeLine}{props.thirdLine !== "" ? <br /> : ""}
            {props.thirdLine}{props.fourthLine !== "" ? <br /> : ""}
            {props.fourthLine}
        </p>
    );
}

export default ParaText3;