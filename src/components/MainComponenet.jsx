import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Recipe from './RecipeComponent';
import Feedback from './FeedbackComponent';

import { RECIPES } from '../shared/recipe'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: RECIPES
        };
    }


    render() {

        // const RecipeWithId = ({ match }) => {
        //     return (
        //         <RecipeDetail />
        //     );
        // };

        return (
            <div className='bg-color'>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home recipes={this.state.recipes} />} />
                    <Route exact path='/Recipes' component={() => <Recipe />} />
                    {/* <Route path='/menu/:dishId' component={RecipeWithId} /> */}
                    <Route exact path='/aboutus' component={() => <About />} />
                    <Route exact path='/feedback' component={() => <Feedback />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(Main);