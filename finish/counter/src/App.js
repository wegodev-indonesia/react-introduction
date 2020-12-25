import {useState} from 'react'

import Navbar from './components/Navbar'
import Container from './components/Container'
import SearchInput from './components/SearchInput'
import Info from './components/Info'
import Todos from './components/Todos'
import Empty from './components/Empty'

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
      // Selama jumlah count masih di atas 0
      // Bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // Kalo udah 0 dan masih dikurangin juga
      // Hapus array value dengan index yang sesuai
      newTodos.splice(index, 1)
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
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos 
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAdditon={(index) => handleAdditionCount(index)}
          />
        ): (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
