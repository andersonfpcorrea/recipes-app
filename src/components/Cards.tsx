import { Link } from 'react-router-dom';

function Cards() {
  const renderCards = () => {
    const markup = () => {
      return (
        <figure>
          <Link to='/details'></Link>
        </figure>
      );
    };

    return <p>A CARD</p>;
  };

  return renderCards();
}

export default Cards;
