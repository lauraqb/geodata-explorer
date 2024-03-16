import FormInput from '../../components/formInput/FormInput'

function Signup() {
  const handleInputChange = () => {}
  return (
    <>
      <form>
        <h2>Create an account</h2>
        <FormInput onChange={handleInputChange} name='email' label='Email' value={'addemail'} />
        <FormInput
          onChange={handleInputChange}
          name='password'
          label='Password'
          value={'data.password'}
          type='password'
        />
        <button>Sign up</button>
      </form>
    </>
  )
}

export default Signup
