import PropTypes from 'prop-types'
import classnames from 'classnames'

import { formatDate } from '../../utils/formatDate'

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article, index, arr) => (
        <div key={index} className={classnames('news-card', {
          'news-card-gap': !(arr.length === index + 1)
        })}>
          <div className="img-container">
            <img
              className="img"
              src={article.urlToImage}
              alt={`${article.title} thumbnail img`} />
            <p className="img-title">{article.title}</p>
          </div>

          <div className="news-card-content">

            <p className="news-card-date">{formatDate(article.publishedAt)}</p>
            <p className="news-card-author">
              {`${article.author} | ${article.source.name}`}
            </p>

            <p className="news-card-desc">{article.description}</p>

          </div>
        </div>
      ))}
    </div>
  )
}

NewsList.propTypes = {
  articles: PropTypes.array
}

export default NewsList