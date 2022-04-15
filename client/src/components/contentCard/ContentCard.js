import React from 'react';
import { Card } from 'react-bootstrap';
import './ContentCard.scss';

function ContentCard(props) {
    return (
        <div className='content-card'>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContentCard;