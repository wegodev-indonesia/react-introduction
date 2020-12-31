import { Link } from "react-router-dom";

import styles from './Navbar.module.css'

import { CATEGORIES } from '../../constants/categories'
import newsIcon from '../../assets/news-icon.svg'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((category, index) => (
          <Link
            key={index}
            to={`/${category.slug}`}
            className={styles.category}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
