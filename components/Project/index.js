import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// const rootDir = require('../../util/path');

//
import {useDetailProjectDispatch} from '../../hooks/useDetailProjectDipatch';

const Project = () => {
   const dispatchDetail = useDetailProjectDispatch();
   const [activeClass, setActiveClass] = React.useState(0);
   let mock_project = [
      {
         icon: 'e.',
         title: 'exhibition',
         detail: {
            logo: '/static/exhibition.png',
            title: 'iran international exhibition',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
            cover: '/static/image/wallpaper/wallpaper_one.jpg',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'android application',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'android application',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'android application',
               },
            ],
         },
      },
      {
         icon: 'm.',
         title: 'moneyz',
         detail: {
            logo: '/static/moneyz.svg',
            title: 'moneyz',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'moneyz.com',
            url_address: 'https://www.apple.com',
            cover: '/static/image/wallpaper/wallpaper_two.jpg',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'android application',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'android application',
               }
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'android application',
               },
            ],
         },
      },
      {
         icon: 'b.',
         title: 'besparo',
         detail: {
            logo: '/static/besparo.png',
            title: 'besparo',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'besparo.com',
            url_address: 'https://www.apple.com',
            cover: '/static/image/wallpaper/wallpaper_three.jpg',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/apple.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'android application',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'android application',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'android application',
               },
            ],
         },
      },
      {
         icon: 'a.',
         title: 'ahali',
         detail: {
            logo: '/static/shark.svg',
            title: 'ahali',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'ahali.com',
            url_address: 'https://www.apple.com',
            cover: '/static/image/wallpaper/wallpaper_four.jpg',
            devices: [],
            technologies: [],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'android application',
               },
            ],
         },
      },
      {
         icon: 'c.',
         title: 'cryptoland',
         detail: {
            logo: '/static/cryptoland.png',
            title: 'cryptoland',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'cryptoland.net',
            url_address: 'https://cryptoland.net/',
            cover: '/static/image/wallpaper/wallpaper_five.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'android application',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/webpack.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'android application',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
            ],
         },
      },
   ];
   let mock_progress = [
      {
         logo: '/static/image/progresslogo.svg',
         title: 'social network',
         description:
            'To use more sophisticated CSS-in-JS solutions, you typically have to implement\n' +
            '                                        style',
         detail: {
            logo: '/static/shark.svg',
            title: 'social network',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.apple.com',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'android application',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'android application',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'android application',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'android application',
               },
            ],
         },
      },
   ];
   const handleClick = (detail, i) => {
      // console.log(detail);
      dispatchDetail(detail);
      setActiveClass(i);
   };
   return (
      <div className={`${grid.row} ${grid.flexWrap} ${css.wrapper}`}>
         <div className={css.leftSide}>
            <h4 className={css.mainTitle}>
               projects <span className={general.count}>(5)</span>
            </h4>
            <ul className={css.step}>
               {mock_project.map((eachItem, index) => {
                  return (
                     <li className={css.item} key={index}>
                        <a
                           onClick={() => handleClick(eachItem.detail, index)}
                           className={activeClass === index ? css.active : ''}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{eachItem.icon}</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  );
               })}
               {/* <li className={css.item}>
                  <a>
                     <div className={css.projectBox}>
                        <h3 className={css.icon}>8+</h3>
                     </div>
                     <h4 className={css.title}>more</h4>
                  </a>
               </li> */}
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
