import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { addNumber, subNumber, isOddAdd,delay2Add } from '../store/action'
class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: 'hello world'
    }
  }
  
  componentDidMount () {
    console.log(this.props.match)
  }
  AddNumber () {
    store.dispatch(addNumber('12312313'))
  }
  subNumber () {
    console.log(this)
    store.dispatch(subNumber('46'))
  }
  isOdd () {
    console.log(123)
    store.dispatch(isOddAdd('1213123'))
  }
  delay2 () {
    store.dispatch(delay2Add('123123121313'))
  }
  render() {
    return (
      <div>
        <h1>{ this.state.name }</h1>
        <h1>{ this.props.number.count}</h1>
        <p>
          <button onClick = {this.AddNumber.bind(this)}>增加</button>
          <button onClick = {this.subNumber.bind(this)}>减少</button>
          <button onClick = {this.isOdd.bind(this)}>偶数才能增加</button>
          <button onClick = {this.delay2.bind(this)}>2s后增加</button>
        </p>
      </div>
    );
  }
}

const HelloWorldApp = connect((state)=>({
  number: state.Number
}))(HelloWorld)

export default HelloWorldApp
