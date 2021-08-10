import React, { Component } from 'react'
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';
import ReactPlayer from 'react-player/youtube'

class RecipeDetail extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='video'>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=amE9ZdPqZJg'
                                controls='true'
                            // playing='false'
                            // light={this.props.recipe.thumbnail}
                            />
                        </Col>
                    </Row>
                    <Row className="p-3 my-2 rounded bg-docs-transparent-grid">
                        <Col sm='12' className='d-flex justify-content-center'>
                            <Toast className='rd-toast'>
                                <ToastHeader className='about-toast-header'>
                                    {this.props.recipe.name}
                                </ToastHeader>
                                <ToastBody className='about-toast-body'>
                                    {this.props.recipe.description}
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row className="p-3 my-2 rounded bg-docs-transparent-grid">
                        <Col sm={8} className='mb-2'>
                            <Toast className='rd-toast'>
                                <ToastHeader className='about-toast-header'>
                                    Recipe
                                </ToastHeader>
                                <ToastBody className='about-toast-body'>
                                    {this.props.recipe.recipe}
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col sm={4} className='mb-2'>
                            <Toast className='rd-toast'>
                                <ToastHeader className='about-toast-header'>
                                    Ingredients
                                </ToastHeader>
                                <ToastBody className='about-toast-body'>
                                    {this.props.recipe.ingredients}
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default RecipeDetail;