import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './Emojis.module.css'

import { searchEmojis } from '../../utils/searchEmojis'
import EmojiBox from '../EmojiBox'

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setfilteredEmojis] = useState([])

  useEffect(() => {
    setfilteredEmojis(
      searchEmojis({
        emojisData,
        searchText
    }))

  }, [emojisData, searchText])

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <EmojiBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    )
  } else {
    return (
      <div>NULLLLLL</div>
    )
  }
}

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string
}

export default Emojis