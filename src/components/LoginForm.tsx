function LoginForm() {
  return (
    <form className='form-login'>
      <div className='form-login__header'>
        <p>Logo</p>
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
          <input type='email' id='email-input' />
        </div>
        <div>
          <label htmlFor='pass-input'>Email</label>
          <input type='password' id='pass-input' />
        </div>
      </div>
      <div className='form-login__actions-btns'>
        <div>
          <label htmlFor='remember-input'>
            <input type='checked' id='remember-input' />
            Remember-me
          </label>
          <span className='link'>Forgot password?</span>
        </div>
        <button type='submit' className='btn btn--login'>
          Sign in
        </button>
        <div>
          <hr />
          <p>or continue with</p>
          <hr />
        </div>
        <div>
          <button type='button'>Google</button>
          <button type='button'>Facebook</button>
          <button type='button'>Twitter</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
