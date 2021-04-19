import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './components/Navbar.component';
import DashboardPage from './pages/DashboardPage.component';
import PostsPage from './pages/PostsPage.component';
import SinglePostPage from './pages/SinglePostPage.component';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/posts/:id" component={SinglePostPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;