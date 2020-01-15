import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/shared/Header.jsx'
import Routes from './routes';
import { getArticle } from './services/ApiMethods.js'
import NewArticle from './components/NewArticle.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;