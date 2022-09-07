import { useEffect, useState } from 'react';
import { getRandomPerson } from '../data/persons';
import { HiLocationMarker } from 'react-icons/hi';

function Author() {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    const author = getRandomPerson();
    setPhoto(author.photoUrl);
    setName(author.name);
    setPlace(author.place);
  }, []);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

  return (
    <div className="flex flex-jc-sb flex-align">
      <div className="flex flex-gap-10 flex-align">
        <img src={photo} alt={name} className="author-img" />
        <div className="flex flex-col fs-12">
          <p className=" fw-600">{name}</p>
          <div className="flex flex-gap-02">
            <HiLocationMarker className="author-location-mark fs-16" />
            <p className="fs-12 color-grey-dark-2">{place}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`author-flw-btn author-flw--${follow}`}
        onClick={handleFollow}
      >
        {follow ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

export default Author;
