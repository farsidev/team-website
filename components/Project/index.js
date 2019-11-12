import React from 'react';
import Link from 'next/link';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// const rootDir = require('../../util/path');

// import image
import ProgressImage from '../../asset/image/progresslogo.svg';
import logoImage from '../../asset/image/shark.svg';

//
import {useDetailProjectDispatch} from '../../hooks/useDetailProjectDipatch';

const Project = () => {
   const dispatchDetail = useDetailProjectDispatch();
   let mock_project = [
      {
         icon: 'e.',
         title: 'exhibition',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'iran international exhibition',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
      {
         icon: 'm.',
         title: 'moneyz',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'moneyz',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
      {
         icon: 'b.',
         title: 'besparo',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'besparo',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
      {
         icon: 'a.',
         title: 'ahali',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'ahali',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
      {
         icon: 'c.',
         title: 'cryptoland',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'cryptoland',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
   ];
   let mock_progress = [
      {
         logo: ProgressImage,
         title: 'social network',
         description:
            'To use more sophisticated CSS-in-JS solutions, you typically have to implement\n' +
            '                                        style',
         detail: {
            // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
            logo: logoImage,
            title: 'social network',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
         },
      },
   ];
   const handleClick = detail => {
      // console.log(detail);
      dispatchDetail(detail);
   };
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
                        <a onClick={() => handleClick(eachItem.detail)}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{eachItem.icon}</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  );
               })}
               <li className={css.item}>
                  <a>
                     <div className={css.projectBox}>
                        <h3 className={css.icon}>8+</h3>
                     </div>
                     <h4 className={css.title}>more</h4>
                  </a>
               </li>
            </ul>
         </div>
         <div className={css.rightSide}>
            <h4 className={css.mainTitle}>
               in progress... <span className={general.count}>(1)</span>
            </h4>
            <ul>
               {mock_progress.map((eachItem, index) => {
                  return (
                     <li key={index}>
                        <a onClick={() => handleClick(eachItem.detail)}>
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
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default Project;
