import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Recipe from './RecipeComponent';
import Feedback from './FeedbackComponent';

class Main extends Component {

    render() {
        return (
            <div className='bg-color'>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home />} />
                    <Route exact path='/Recipes' component={() => <Recipe />} />
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