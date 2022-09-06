import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  useEffect(() => {}, []);

  return <section>DETAILS PAGE</section>;
}

export default Details;
