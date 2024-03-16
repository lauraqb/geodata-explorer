import {Link} from 'react-router-dom'
import FormInput from '../../components/formInput/FormInput'
import styles from './Login.module.scss'
import {useState} from 'react'

type LoginFormType = {
  email: string
  password: string
}

function Login() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<LoginFormType>({
    email: '',
    password: '',
  })

  const handleInputChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }
  const submit = (e: any) => {
    e.preventDefault()
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')
    if (data.email === storedEmail && data.password === storedPassword) setLoggedIn(true)
    else {
      setError('Wrong email or password.')
    }
  }

  return (
    <div className={styles.base}>
      {loggedIn && (
        <div>
          <h1>Welcome</h1>
          <div>{data.email}</div>
          <div>Go to map tab and search for ticketmaster events in a choosen country</div>
        </div>
      )}
      {!loggedIn && (
        <form>
          <h2>Sign in to your account</h2>
          <FormInput onChange={handleInputChange} name='email' label='Email' value={data.email} />
          <FormInput
            onChange={handleInputChange}
            name='password'
            label='Password'
            value={data.password}
            type='password'
          />
          <button onClick={(event) => submit(event)}>Log in</button>
          <div>
            You don't have an account?
            <Link to='/geodata-explorer/signup'>Sign up</Link>
          </div>
          {error}
        </form>
      )}
    </div>
  )
}

export default Login
