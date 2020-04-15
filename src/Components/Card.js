import React, {Fragment} from 'react'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const CardComp = ({id, name, email}) => {
    return(
        <Fragment>
        <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src="http://placekitten.com/800/450" />
  <Card.Body>
    <Card.Title>{email}</Card.Title>
    <Card.Text>{name}
    </Card.Text>
    <Button variant="primary">{id}</Button>
  </Card.Body>
</Card>
</Fragment>
    )
}

export default CardComp;