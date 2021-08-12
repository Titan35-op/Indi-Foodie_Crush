import React, { Component } from 'react'
import { Toast, ToastBody, ToastHeader, FormGroup, Label, Input, Form, Button, Col, Jumbotron, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Feedback extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Card inverse>
                        <CardImg src="/assets/images/feedback2.jpg" alt="Card image cap" />
                        <CardImgOverlay className='text-center m-auto'>
                            <CardTitle tag='h1'>Feedback</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Jumbotron>

                <div className="p-3 my-2 rounded bg-docs-transparent-grid d-flex justify-content-center">
                    <Toast className='p-3 about-toast'>
                        <ToastHeader className='form-toast-header'>
                            Feedback Form
                        </ToastHeader>
                        <ToastBody className='form-toast-body'>
                            <Form>
                                <FormGroup row className='my-3'>
                                    <Label for="name" sm={3}>Name</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="name" id="name" placeholder="Enter your name here" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row className='my-3'>
                                    <Label for="exampleEmail" sm={3}>Email</Label>
                                    <Col sm={8}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your mail id" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row className='my-3'>
                                    <Label for="star" sm={3}>Star Rating</Label>
                                    <Col sm={8}>
                                        <Input type="select" name="star" id="exampleSelect">
                                            <option>5 Star</option>
                                            <option>4 Star</option>
                                            <option>3 Star</option>
                                            <option>2 Star</option>
                                            <option>1 Star</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className='my-3'>
                                    <Label for="feedback" sm={3}>Feedback</Label>
                                    <Col sm={8}>
                                        <Input type="textarea" name="feedback" id="exampleText" placeholder='Enter your feedback here' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row className='my-3'>
                                    <Label for="contact" sm={3}>May we contact you?</Label>
                                    <Col sm={{ size: 8 }}>
                                        <FormGroup check className='mx-2'>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                Check me out
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 8, offset: 3 }}>
                                        <Button>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        )
    }
}
export default Feedback;