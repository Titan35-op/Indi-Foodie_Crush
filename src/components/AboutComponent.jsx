import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Jumbotron, Toast, ToastHeader, ToastBody } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Card inverse>
                        <CardImg src="/assets/images/about.jpg" alt="Card image cap" />
                        <CardImgOverlay className='text-center m-auto'>
                            <CardTitle tag='h1'>About Us</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Jumbotron>

                <div className="p-3 my-2 rounded bg-docs-transparent-grid d-flex justify-content-center">
                    <Toast className='p-3 about-toast'>
                        <ToastHeader className='about-toast-header'>
                            Welcome to Indi Foodie Crush that is the place where you get basic recipes with some unique and tasty twists. More varieties of sweets, cakes, snacks, Indian veg and non - veg both type of recipes and many more innovative delicious recipes.
                        </ToastHeader>
                        <ToastBody className='about-toast-body'>
                            <p>Please subscribe to Indi Foodie Crush and give yourself yummy + delicious treats.  </p>
                            <p>So we are introducing me (Vandana) and my hubby (Aniket) as your's cooking friends from Lucknow, India.</p>
                            <p>I am Sharing some basic recipes, some perfect recipes, some new recipes, some secret recipes, and some innovative special recipes with you in simple style. Food makes our life better.</p>
                            <p>Active Since: June 2021</p>
                            <p><b>PLEASE SUBSCRIBE AND SHARE THE JOY</b></p>
                            <p>For Business inquiries Contact: vandanagupta153@gmail.com</p>
                            <p>Contact info. : 9878xxxx98</p>
                        </ToastBody>
                    </Toast>
                </div>
                
            </div>
        )
    }
}
export default About;