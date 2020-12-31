import PropTypes from 'prop-types'

import styles from './NewsList.module.css'
import NewsCard from '../NewsCard'

const NewsList = ({ articles }) => {
  return (
    <div className={styles.newsList}>
      {articles.map((article, index, arr) => {
        if (!article.urlToImage || !article.author || !article.content) {
          // If urlToImage, content, and/or author from API response is null
          // return nothing (not rendering React component)
          return null
        }
        
        return (
          <NewsCard
            key={index}
            src={article.urlToImage}
            title={article.title}
            publishedAt={article.publishedAt}
            author={article.author}
            sourceName={article.source.name}
            description={article.description}
            url={article.url}
            notLastChild={!(arr.length === index + 1)}
          />
        )
      })}
    </div>
  )
}

NewsList.propTypes = {
  articles: PropTypes.array
}

export default NewsList