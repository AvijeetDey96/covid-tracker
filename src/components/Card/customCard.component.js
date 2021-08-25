import React, { useState, useEffect } from 'react';
import { Card, Alert, Button } from 'react-bootstrap';

const CustomCard = ({ Title, Data, variant, onClick }) => {
    return (<Card  >
        <Card.Body>
            <Card.Title>
                <Alert key={Title} variant={variant}>
                    {Title}
                </Alert>
            </Card.Title>
            <Card.Text className="mb-2 text-muted ">
                {Data}
            </Card.Text>
            <Button name={Title} onClick={onClick}>Go to Description</Button>
        </Card.Body>
    </Card>);
}

export default CustomCard;