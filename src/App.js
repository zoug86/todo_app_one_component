import React, { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [remaining, setRemaining] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText('');
    setRemaining(remaining + 1);
  }

  const handleClick = (e) => {
    if (e.currentTarget.className) {
      e.currentTarget.className = '';
      setRemaining(remaining + 1);
    } else {
      e.currentTarget.className = 'strike';
      setRemaining(remaining - 1);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="">
        <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn">Add</button>
      </form>
      <p>{remaining} tasks remaining</p>
      <div className="todos">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={handleClick} data-id={index}>{todo}</li>
          ))}
        </ul>
      </div>

    </div >
  );
}

export default App;
