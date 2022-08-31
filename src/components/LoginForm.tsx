import Icon from '../assets/favicon.png';
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs';

function LoginForm() {
  return (
    <form className='form-login'>
      <div className='form-login__header'>
        <img src={Icon} alt='Forkify logo' />
        <div>
          <h3>Log in to your account</h3>
          <p>
            Don't have an account? <span className='link'>Sign up</span>
          </p>
        </div>
      </div>
      <div className='form-login__inputs'>
        <div>
          <label htmlFor='email-input'>Email</label>
          <input type='email' id='email-input' className='width-100percent' />
        </div>
        <div>
          <label htmlFor='pass-input'>Password</label>
          <input type='password' id='pass-input' className='width-100percent' />
        </div>
      </div>
      <div className='form-login__actions-btns width-100percent'>
        <div className='form-login__remember-forgot'>
          <label htmlFor='remember-input'>
            <input type='checkbox' id='remember-input' />
            &nbsp;Remember-me
          </label>
          <span className='link'>Forgot password?</span>
        </div>
        <button type='submit' className='btn btn--login'>
          Sign in
        </button>
        <div className='form-login__hrows'>
          <hr />
          <p>&nbsp;or continue with&nbsp;</p>
          <hr />
        </div>
        <div className='form-login__socialBtns'>
          <button type='button' className='btn btn--social'>
            <BsGoogle />
          </button>
          <button type='button' className='btn btn--social'>
            <BsFacebook />
          </button>
          <button type='button' className='btn btn--social'>
            <BsTwitter />
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
