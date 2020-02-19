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
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return <div className='todo-list'>{todoComponents}</div>;
  }
}

export default App;
