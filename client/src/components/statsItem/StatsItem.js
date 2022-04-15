import React from 'react';
import './StatsItem.scss';

function StatsItem(props) {
    return (
        <div className='stats-item'>
            <p className='margin-global-bottom-0'>{props.text}</p>
            <h1>{props.number}</h1>
        </div>
    );
}

export default StatsItem;