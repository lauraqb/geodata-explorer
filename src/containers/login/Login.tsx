import {Link} from 'react-router-dom'
import FormInput from '../../components/formInput/FormInput'

function Login() {
  const handleInputChange = () => {}
  return (
    <>
      <form>
        <h2>Sign in to your account</h2>
        <FormInput onChange={handleInputChange} name='email' label='Email' value={'addemail'} />
        <button>Log in</button>
        <div>
          You don't have an account?
          <Link to='/signup'>Sign up</Link>
        </div>
      </form>
    </>
  )
}

export default Login
