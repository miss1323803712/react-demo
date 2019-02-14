import React, { Component } from 'react';
import './App.css';
import TodoListApp from './components/todoList'
import HelloWorld from './components/helloworld'
import { BrowserRouter as Router, Route, Link, NavLink , withRouter  } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavLink exact  to={`/`} activeClassName="select">首页</NavLink>
        <NavLink exact  to={`/about`} activeClassName="select">关于</NavLink>
          <Route exact path="/" component={HelloWorld} />
          <Route path="/about" component={TodoListApp} />
        </div>
      </Router>
    );
  }
}

// const StoreApp = connect((state)=>({
//   number: state.Number
// }))(App)

export default App
