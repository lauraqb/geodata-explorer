import styles from './Home.module.scss'

function Home() {
  const name = localStorage.getItem('email')
  return (
    <div className={styles.base}>
      <h1>Welcome</h1>
      <div>{name}</div>
    </div>
  )
}

export default Home
