import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';
import poster from '../../asset/image/guys/poster.jpg';


const Bio = () => {
   return (
      <div className={css.bioWrapper}>
         <div className={`${grid.row} ${grid.alignItemsCenter}`}>
            <div className={css.poster}>
               <img src={poster} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Bio;
