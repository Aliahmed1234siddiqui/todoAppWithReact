import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {

      setTodos([...todos, { text: inputText,}]);
      setInputText('');
    
  };

 const EditTodo = (index)=>{
let newData = prompt("ENTER A TODO ");
setTodos([...todos, { text: newData}]);
 }
 

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className='head'>Todo App</h1>
      <div>
        <input
        className='input'
          type="text"
          placeholder="ENTER  ITEM"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='button' onClick={addTodo}>Add Todo</button>
        <button className='button'>Delete All</button>
      </div>

      <ul className='list'>
        {todos.map((todo, index) => (
          <li className='listItem' key={index}>
            <span className='text'>{todo.text}</span>
            <button className='remove' onClick={() => removeTodo(index)}>Remove</button>
            <button className='remove' onClick={() => EditTodo(index)}>Edit</button>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;