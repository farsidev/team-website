import React from 'react';
import Link from 'next/link';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';
// import image
import ProgressImage from '../../asset/image/progresslogo.svg';

const Project = () => {
   let mock_project = [
      {
         icon: 'e.',
         title: 'exhibition',
      },
      {
         icon: 'm.',
         title: 'moneyz',
      },
      {
         icon: 'b.',
         title: 'besparo',
      },
      {
         icon: 'a.',
         title: 'ahali',
      },
      {
         icon: 'c.',
         title: 'cryptoland',
      },
      {icon: '8+', title: 'more'},
   ];
   let mock_progress = [
      {
         logo: ProgressImage,
         title: 'social network',
         description:
            'To use more sophisticated CSS-in-JS solutions, you typically have to implement\n' +
            '                                        style',
      },
   ];
   return (
      <div className={`${grid.row} ${grid.flexWrap} ${css.wrapper}`}>
         <div className={css.leftSide}>
            <h4 className={css.mainTitle}>
               projects <span className={general.count}>(13)</span>
            </h4>
            <ul className={css.step}>
               {mock_project.map((eachItem, index) => {
                  return (
                     <li className={css.item} key={index}>
                        <a>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{eachItem.icon}</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className={css.rightSide}>
            <h4 className={css.mainTitle}>
               in progress... <span className={general.count}>(1)</span>
            </h4>
            {mock_progress.map((eachItem, index) => {
               return (
                  <Link href="/" key={index}>
                     <a>
                        <div className={css.progressBox}>
                           <div
                              className={`${grid.row} ${grid.alignItemsCenter}`}>
                              <div className={css.progressLogo}>
                                 <img src={eachItem.logo} alt="" />
                              </div>
                              <div className={css.progressDescription}>
                                 <h4>{eachItem.title}</h4>
                                 <p>{eachItem.description}</p>
                              </div>
                           </div>
                        </div>
                     </a>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Project;
