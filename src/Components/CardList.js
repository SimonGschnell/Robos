import React, {Fragment} from 'react'
import Card from './Card.js'
import { Container, Row, Col} from 'react-bootstrap';

const CardList = ({robots}) => {
    const CardArray = robots.map( (robot, index) => { return(<Col key={robots[index].id} xs="auto"><Card  id={robots[index].id} name={robots[index].name} email={robots[index].email} /></Col>) })
    return(
        <Fragment>
           <Container>
                <Row className="justify-content-md-center">
                    {CardArray}
                </Row>
            </Container>
        </Fragment>
    )
}

export default CardList;