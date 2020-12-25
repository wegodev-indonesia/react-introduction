import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import Navbar from './components/Navbar'
import Emojis from './components/Emojis'

const App = () => {
  const [emojisData, setEmojisData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')

        setEmojisData(res.data)
        setLoading(false)

      } catch (error) {
        console.error(error)

        setError(true)
        setLoading(false)
      }
    }

    fetchEmojis()
  }, [])

  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <Navbar />

      <section className="container">
        <input
          className="input"
          onChange={handleSearchEmojis}
          placeholder="Search"
          value={searchText} />
    
        {loading && <p>Loading....</p>}
        {error && <p>Error!!!</p>}
        {!loading && !error && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}

      </section>
    </>
  );
}

export default App;
