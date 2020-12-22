import {useState} from 'react'

import './App.css';

import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu ultra', count: 1},
    {title: 'Tahu sumedang', count: 1},
    {title: 'Semangka', count: 1}
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No blank List!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]
    const indexedCountProperty = newTodos[index].count

    if (indexedCountProperty > 0) {
      newTodos[index].count = newTodos[index].count - 1
    }

    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  return (
    <>
      <nav className="nav">
        <img className="shopping-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="List" />
          <button className="add-button" type="submit">add</button>
        </form>

        <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => (
              <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>
                {todo.title}

                <div className="todo-icon-wrapper">
                  <div className="todo-count">{todo.count}</div>
                  
                  <button onClick={() => handleSubstractionCount(index)} className="todo-action-button">
                    <img src={minusIcon} alt="minus icon" />
                  </button>
                  <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
                    <img className="todo-icon" src={plusIcon} alt="plus icon" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        ): null}
      </section>
    </>
  );
}

export default App;
