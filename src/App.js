import React, { Component } from 'react';
import './App.css';

import TodoItem from './Components/TodoItem';
import todosData from './TodosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodos
      };
    });
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className='todo-list'>{todoComponents}</div>;
  }
}

export default App;
