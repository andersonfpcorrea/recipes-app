import Icon from '../assets/favicon.png'
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs'
import isEmail from 'validator/lib/isEmail'
import { SyntheticEvent, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [validationError, setValidationError] = useState(false)
  const navigate = useNavigate()

  const handleInput = ({ target }: SyntheticEvent) => {
    const { value, type } = target as HTMLInputElement
    setUser((prevState) => ({ ...prevState, [type]: value }))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    isEmail(user.email) && user.password.length > 7 && navigate('/home')
    setValidationError(true)
  }

  const renderValidationError = (msg: string) => {
    if (validationError) {
      // setTimeout(() => setValidationError(false), 5000);
      return <p className="error-el-login-inputs">{msg}</p>
    }
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="form-login__header">
        <img src={Icon} alt="Forkify logo" />
        <div>
          <h3>Log in to your account</h3>
          <p>
            Don&apos;t have an account? <span className="link">Sign up</span>
          </p>
        </div>
      </div>
      <div className="form-login__body pos-rel">
        <div className="form-login__inputs">
          <div className="form-login__email-div pos-rel">
            <label htmlFor="email-input">
              Email <span className="require-indicator">*</span>
            </label>
            <input
              type="email"
              placeholder="teresa@email.com"
              id="email-input"
              className="width-100percent border-radius-3 inputs inputs__login"
              required
              value={user.email}
              onChange={handleInput}
            />
            {validationError &&
              renderValidationError('Use a valid email address')}
          </div>
          <div className="form-login__password-div pos-rel">
            <label htmlFor="pass-input">
              Password <span className="require-indicator">*</span>
            </label>
            <input
              type="password"
              placeholder="Must be at least 8 characters"
              id="pass-input"
              className="width-100percent border-radius-3 inputs inputs__login"
              required
              value={user.password}
              onChange={handleInput}
            />
            {validationError &&
              renderValidationError('must be at least 8 char.')}
          </div>
        </div>
        <div className="form-login__actions-btns width-100percent">
          <div className="form-login__remember-forgot">
            <label htmlFor="remember-input">
              <input type="checkbox" id="remember-input" />
              &nbsp;Remember-me
            </label>
            <span className="link">Forgot password?</span>
          </div>
          <button type="submit" className="btn btn__signin">
            Sign in
          </button>
          <div className="form-login__hrows">
            <hr />
            <p>&nbsp;or continue with&nbsp;</p>
            <hr />
          </div>
          <div className="form-login__socialBtns">
            <button type="button" className="btn btn--social">
              <BsGoogle />
            </button>
            <button type="button" className="btn btn--social">
              <BsFacebook />
            </button>
            <button type="button" className="btn btn--social">
              <BsTwitter />
            </button>
          </div>
        </div>
        <p className="skip-login-element">
          or click{' '}
          <Link to="/home" className="link">
            here
          </Link>{' '}
          to skip login and see the app
        </p>
      </div>
    </form>
  )
}

export default LoginForm
