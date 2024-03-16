import {Link} from 'react-router-dom'
import styles from './Header.module.scss'
function Header() {
  return (
    <header className={styles.base}>
      <Link to={'/map'}>Map</Link>
      <div>
        <Link to={'/login'}>Log in</Link>
        <Link to={'/signup'}>Sign up</Link>
      </div>
    </header>
  )
}
export default Header
