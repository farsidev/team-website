import React from 'react';
import css from './style.scss';

const Logo = () => {
   return (
      <div className={`${css.teamLogoParent}`}>
         <div className={css.imageParent}>
            <img src='/static/image/shark.svg' alt="Developers" title="Developers" />
         </div>
         <h2 className={css.teamName}>my amor.</h2>
      </div>
   );
};

export default Logo;
