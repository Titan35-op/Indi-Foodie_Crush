import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Jumbotron, Container, Row, Col } from 'reactstrap';
import '../css/home.css';

function RenderCard() {
    return (
        <Card>
            <CardImg width="100%" top src='assets/images/card.jpg' alt='This is a video' />
            <CardBody>
                <CardTitle tag="h5">Name</CardTitle>
                <CardText>Discription</CardText>
            </CardBody>
        </Card>
    );
}

class Home extends Component {

    render() {
        return (
            <div className='bg-color'>
                <Jumbotron>
                    <Card inverse>
                        <CardImg src="/assets/images/bg.jpg" alt="Card image cap" />
                        <CardImgOverlay className='text-center m-auto'>
                            <CardTitle><h1>Welcome To</h1></CardTitle>
                            <CardText><h1>INDI FOODIE CRUSH</h1></CardText>
                            <CardText><h1>New Videos Every Weekdays</h1></CardText>
                        </CardImgOverlay>
                    </Card>
                </Jumbotron>
                <h2 className='text-center m-3'>Popular videos</h2>
                <Container>
                    <Row>
                        <Col md='6' className='my-2'><RenderCard /></Col>
                        <Col md='6' className='my-2'><RenderCard /></Col>
                    </Row>
                    <Row>
                        <Col md='6' className='my-2'><RenderCard /></Col>
                        <Col md='6' className='my-2'><RenderCard /></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Home;