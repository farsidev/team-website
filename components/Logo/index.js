import React from 'react';
import css from './style.scss';

// import image
import logoImage from '../../asset/image/shark.svg';

const Logo = () => {
   return (
      <div className={`${css.teamLogoParent}`}>
         <div className={css.imageParent}>
            <img src={logoImage} alt="Developers" title="Developers" />
         </div>
         <h2 className={css.teamName}>my amor.</h2>
      </div>
   );
};

export default Logo;
