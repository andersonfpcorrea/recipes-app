import { Link } from 'react-router-dom';
import Logo from '../assets/favicon.png';
import Icons from '../assets/icons.svg';

function Hero() {
  return (
    <section className='hero'>
      <img src={Logo} alt='Forkify logo' />
      <div className='hero-cta-container'>
        <div className='hero-cta-text'>
          <h1 className='hero-cta-heading'>Forkify</h1>
          <p className='hero-cta-subheading'>Find the best recipes</p>
        </div>
        <Link to='/login'>
          <button type='button' className='btn hero__btn'>
            Start Cooking &nbsp;&nbsp;
            <svg className='hero__icon'>
              <use xlinkHref={`${Icons}#icon-arrow-right`} />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
