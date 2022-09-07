import Icons from '../assets/icons.svg';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ReactElement, useState } from 'react';

interface TopBarProps {
  backgroundHandler?: Function;
  menuAndBackground?: Function;
}

function TopNavigationBar(props: TopBarProps) {
  const { backgroundHandler, menuAndBackground } = props;
  let navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <nav>
      <div className="flex flex-jc-sb pos-rel">
        <svg className="search--top-left-arrow" onClick={navigateBack}>
          <use xlinkHref={`${Icons}#icon-arrow-left`} />
        </svg>
        <BsThreeDots
          className="fs-22"
          onClick={() => {
            backgroundHandler?.();
          }}
        />
      </div>
      {menuAndBackground?.()}
    </nav>
  );
}

export default TopNavigationBar;
