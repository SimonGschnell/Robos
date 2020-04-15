import React, {Fragment} from 'react'
import {Container, Row, Col, InputGroup,FormControl} from 'react-bootstrap'


const SearchField = ({searchFieldChange}) => {
    return(
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <InputGroup className="my-3">
                            <FormControl
                            placeholder="RobotName"
                            aria-label="RobotName"
                            aria-describedby="basic-addon1"
                            onChange={searchFieldChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default SearchField;