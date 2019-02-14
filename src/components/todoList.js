import React, { Component } from 'react'
import { connect , Provider} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showButton: false
    }
  }
  showButton () {
    this.setState({
      showButton:!this.state.showButton
    })
  }
  render(){
    return (
      <div>
        <h2>{this.props.count}</h2>
        <p><button onClick={this.showButton.bind(this)}>{this.state.showButton ? '隐藏':'显示'}</button></p>
        <CSSTransition in={this.state.showButton} classNames="star" timeout={300} unmountOnExit>
          <div>我是一段文字</div>
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    count: state.Number.count + '个'
  }
}

const TodoListApp = connect(
  mapStateToProps
)(TodoList)

export default TodoListApp