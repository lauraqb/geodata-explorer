import {useState} from 'react'
import FormInput from '../../components/formInput/FormInput'
import styles from './Signup.module.scss'

export type LoginFormType = {
  email: string
  password: string
}
function Signup() {
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

  const storeUserData = () => {
    localStorage.setItem('email', data.email)
    localStorage.setItem('password', data.password)
  }

  return (
    <div className={styles.base}>
      <form>
        <h2>Create an account</h2>
        <FormInput onChange={handleInputChange} name='email' label='Email' value={data.email} />
        <FormInput
          onChange={handleInputChange}
          name='password'
          label='Password'
          value={data.password}
          type='password'
        />
        <button onClick={storeUserData}>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
