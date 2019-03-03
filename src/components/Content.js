import React from 'react';
import { Route} from 'react-router-dom';
import Home from './Home';
import Recipespage from './RecipesPage';
import Contact from './Contact';



const Content = () => {
    return (
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Recipespage} />
            <Route path="/contact" component={Contact} />
        </div>)
}

export default Content