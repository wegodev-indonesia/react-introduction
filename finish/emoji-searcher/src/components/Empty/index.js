import PropTypes from 'prop-types'

import styles from './Empty.module.css'

const Empty = ({ text }) => {
  return (
    <div className={styles.empty}>
      {text}
    </div>
  )
}

Empty.propTypes = {
  text: PropTypes.string.isRequired
}

export default Empty