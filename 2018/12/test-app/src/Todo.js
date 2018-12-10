import React, { Component } from 'react'
import TodoList from './TodoList';


class Todo extends Component {
  state = {
    list: [
      {
        id: 1,
        title: '할일할일1'
      },
      {
        id: 2,
        title: '할일할일2'
      },
    ],
    text: '',

  } 


  checkTodo = (event) => {
    console.log(11111);

    const text = this.state.text;
    const list = [...this.state.list];
    list.push({
      id: 3,
      title: text
    })

    this.setState({ list, text:'' });
    
    event.preventDefault();
  }
  handleChange = (event) => {

    // console.log(event.target.value)
    this.setState({text: event.target.value});
  }

  render () {
    return (
      <div>
        <h1>Todo</h1>
        {/* {this.state.text} <br/> */}
        <form onSubmit={this.checkTodo}>
          <input type="text" 
          onChange={this.handleChange} 
          value={this.state.text}/>
        </form>

        <TodoList list={this.state.list}/>

      </div>
    )
  }
}

export default Todo;