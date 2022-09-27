import { persons } from '../data/persons'
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from 'react-icons/bs'

function UserComment() {
  return (
    <div>
      <div>
        <img src={persons[0].photoUrl} alt="woman's face" />
        <div>
          <p>{persons[0].name}</p>
          <p>September 27, 2022 - 10:30</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <BsFillHandThumbsUpFill /> <BsFillHandThumbsDownFill />
      </div>
    </div>
  )
}

export default UserComment
