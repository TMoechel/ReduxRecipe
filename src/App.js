import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'  //connects the store with the container components

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Navigation />
            <Content />
            <Footer />
          </div>
        </Router>
      </Provider>);
  }
}

export default App;
