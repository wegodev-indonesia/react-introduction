import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './NewsList.module.css'

import { formatDate } from '../../utils/formatDate'

const NewsList = ({ articles }) => {
  return (
    <div className={styles.newsList}>
      {articles.map((article, index, arr) => (
        <div key={index} className={classnames(styles.newsCard, {
          [styles.newsCardGap]: !(arr.length === index + 1)
        })}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={article.urlToImage}
              alt={`${article.title} thumbnail img`} />
            <p className={styles.imgTitle}>{article.title}</p>
          </div>

          <div className={styles.newsCardContent}>

            <p className={styles.newsCardDate}>{formatDate(article.publishedAt)}</p>
            <p className={styles.newsCardAuthor}>
              {`${article.author} | ${article.source.name}`}
            </p>

            <p className={styles.newsCardDesc}>{article.description}</p>

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