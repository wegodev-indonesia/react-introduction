import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './EmojiBox.module.css'

const EmojiBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 600)
    return () => clearTimeout(timer)
  }, [selected])

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol)
        setSelected(true)
      }}
      // className={`emoji-box ${selected ? 'selected' : ''}`}
      className={classnames(styles.emojiBox, {
        [styles.selected]: selected
      })}
      >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)};`
        }} />
      <p className={classnames(styles.emojiText, {
        [styles.selectedText]: selected
      })}>
        {selected ? 'Copied!' : title}
      </p>
    </div>
  )
}

EmojiBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
}

export default EmojiBox