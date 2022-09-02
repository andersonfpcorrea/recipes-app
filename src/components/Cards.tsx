import { Link } from 'react-router-dom';
import { countries } from '../apiMock/countries.js';

function Cards() {
  console.log(countries[0].flags.svg);

  const renderCards = () => {
    const markup = () => {
      return (
        <figure
          style={{
            background: `url('${countries[5].flags.svg}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Link to='/details'>
            <img src={countries[1].flags.svg} alt='country flag' />
            <div>
              <h4>Nome da receita</h4>
              <p>Categoria</p>
            </div>
          </Link>
        </figure>
      );
    };
    return markup();
    // return array.map((recipe) => markup(recipe));
  };

  return renderCards();
}

export default Cards;
