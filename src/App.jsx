import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([{id: 1, text: 'Learn React', done: false}, {id: 2, text: 'Learn Firebase', done: false}, {id: 3, text: 'Learn GraphQL', done: false}]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('useEffect');
  },[]);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addToto = () => {
    if (inputValue) {
      setTodos([...todos, {id: todos.length + 1, text: inputValue, done: false}]);
    }
    setInputValue('');
  };

  return (
    <>
      <h1>TODO APP</h1>
      <div>
        <input value={inputValue} type="text" placeholder='new TODO' onChange={changeInputValue} />
        <button onClick={addToto}>ADD</button>
      </div>
      <Todos todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
