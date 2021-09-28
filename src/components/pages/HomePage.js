import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const home_nav_items = [
    {
        "name": 'Guide',
        "href": 'guide',
        "body": 'Click here to see the full step-by-step guide!'
    },
    {
        "name": 'Lingo',
        "href": 'lingo',
        "body": 'Understand the terminology'
    },
    {
        "name": 'Calculators',
        "href": 'calculators',
        "body": 'Numbers go in, numbers come out'
    },
]

function HomePage() {
    return(
        <div>
            <br/>
            <i>Select from the below options to get started ...</i>
            <br/><br/>
            {/* 
                Search bar goes here, e.g. https://react-autosuggest.js.org/
            */}
            <Row className="d-flex justify-content-around">
                {
                    home_nav_items.map((item, index) => {
                        return(
                            <Col xs={3} key={index}><Card>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.body}</Card.Text>
                                <Link to={item.href}>Go to {item.href} page</Link>
                            </Card></Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default HomePage;