import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Container from './components/Container'
import NewsList from './components/NewsList'

import { getTechNews } from './services/getNews'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true)
      const res = await getTechNews()

      if (!res) {
        setLoading(false)
        setError(true)
        return
      }

      setLoading(false)
      setArticles(res.articles)
    }

    fetchTechNews()
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {articles.length > 0 && (
          <NewsList articles={articles} />
        )}
      </Container>
    </>
  );
}

export default App;
