import { Link } from 'react-router-dom';

function Cards() {
  const renderCards = () => {
    const markup = () => {
      return (
        <figure>
          <Link to='/details'>
            <img src='strArea' alt='country flag' />
            <div>
              <h4>Nome da receita</h4>
              <p>Categoria</p>
            </div>
          </Link>
        </figure>
      );
    };

    return markup();
  };

  return renderCards();
}

export default Cards;
