import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Todos.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = ({ todos, onSubstraction, onAdditon }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => (
        <div
          key={index}
          // className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}
          className={classnames(styles.todo, {
            [styles.todoDivider]: !(arr.length === index + 1)
          })}
        >
          {todo.title}

          <div className={styles.todoIconWrapper}>
            <div className={styles.todoCount}>{todo.count}</div>
            
            <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
              <img src={minusIcon} alt="minus icon" />
            </button>
            <button onClick={() => onAdditon(index)} className={styles.todoActionButton}>
              <img src={plusIcon} alt="plus icon" />
            </button>

          </div>
        </div>
      ))}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number
  })),
  onSubstraction: PropTypes.func,
  onAdditon: PropTypes.func
}

export default Todos