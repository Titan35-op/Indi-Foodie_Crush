import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({ recipe }) {
    return (
        <Col md='5' className='my-3 d-flex justify-content-center'>
            <Card className='hover mx-0'>
                <Link to={`/menu/${recipe.id}`} className='none'>
                    <CardImg top src={recipe.thumbnail} alt={recipe.name}/>
                    <CardBody>
                        <CardTitle tag="h5">{recipe.name}</CardTitle>
                        <CardText>{recipe.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </Col>
    )
}

class Home extends Component {

    render() {
        const recipe = this.props.recipes.map((recipe) => {
            if (recipe.featured) {
                return (
                    <RenderCard recipe={recipe} />
                );
            }
            else return null;
        });

        return (
            <div className='bg-color'>
                <Jumbotron>
                    <Card inverse>
                        <CardImg src="/assets/images/bg1.jpg" alt="Card image cap" />
                        <CardImgOverlay className='text-center m-auto'>
                            <CardText tag='h1'>Welcome To</CardText>
                            <CardTitle tag='h1'>INDI FOODIE CRUSH</CardTitle>
                            <CardText tag='h4'>New Videos Every Weekdays</CardText>
                        </CardImgOverlay>
                    </Card>
                </Jumbotron>
                <h2 className='text-center m-3'>Popular videos</h2>
                <Container>
                    <Row className=' d-flex justify-content-center'>
                        {recipe}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Home;