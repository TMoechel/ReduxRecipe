import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import User from './components/User'
import Contact from './components/Contact'
import Home from './components/Home'

const AppRoutes = () => (
    <Router>
        <div>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/contact" component={Contact} />
            {/* <Route component={NotFound} /> */}
        </div>
    </Router>
  )

  export default AppRoutes;