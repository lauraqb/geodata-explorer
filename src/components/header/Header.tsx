import {Link} from 'react-router-dom'
import styles from './Header.module.scss'
function Header() {
  return (
    <header className={styles.base}>
      <Link to={'/geodata-explorer/map'}>Map</Link>
      <div>
        <Link to={'/geodata-explorer/login'}>Log in</Link>
        <Link to={'/geodata-explorer/signup'}>Sign up</Link>
      </div>
    </header>
  )
}
export default Header
