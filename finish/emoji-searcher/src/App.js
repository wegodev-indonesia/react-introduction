import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import Emojis from './components/Emojis'
import searchIcon from './assets/search-icon.svg'
import emojiIcon from './assets/emoji-icon.svg'

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
      <nav className="nav">
        <img style={{ marginRight: 8 }} className="nav-icon" src={emojiIcon} alt="emoji icon" />
        <img style={{ marginTop: 3 }} className="nav-icon" src={searchIcon} alt="search icon" />
        <span className="nav-title"> er </span>
      </nav>

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
