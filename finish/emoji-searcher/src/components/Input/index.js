import PropTypes from 'prop-types'

import styles from './Input.module.css'

const Input = ({ onChange, value }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      placeholder="Search"
      value={value}
    />
  )
}

Input.propTypes = {
  onChange: PropTypes.func,

}

export default Input