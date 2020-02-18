import React from 'react';
import './App.css';

import TodoItem from './Components/TodoItem';
import todosData from './TodosData';

function App() {
  const todoComponents = todosData.map(item => <TodoItem item={item} />);
  return <div className='todo-list'>{todoComponents}</div>;
}

export default App;
