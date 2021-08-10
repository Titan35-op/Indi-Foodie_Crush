import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({ recipe }) {
    return (
        <Col md='6' className='mt-2 mb-3'>
            <Card>
                <Link to={`/menu/${recipe.id}`} className='none'>
                    <CardImg top src={recipe.thumbnail} alt={recipe.name} />
                    <CardBody>
                        <CardTitle tag="h5">{recipe.name}</CardTitle>
                        <CardText>{recipe.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </Col>
    )
}

class Recipe extends Component {

    render() {
        const recipe = this.props.recipes.map((recipe) => {
                return (
                    <RenderCard recipe={recipe} />
                );
        });

        return (
            <div>
                <Jumbotron>
                    <Card inverse>
                        <CardImg src="/assets/images/recipes.jpg" alt="Card image cap" />
                        <CardImgOverlay className='text-center m-auto'>
                            <CardTitle tag='h1'>Recipes</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Jumbotron>
                <h2 className='text-center m-3'>All videos</h2>
                <Container>
                    <Row>
                        {recipe}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Recipe;