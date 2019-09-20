import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// import images
import logoImage from '../../asset/image/shark.svg';
import android from '../../asset/image/icon/android.svg';
import website from '../../asset/image/icon/laptop.svg';
import react from '../../asset/image/icon/react.svg';
import node from '../../asset/image/icon/nodejs.svg';
import next from '../../asset/image/icon/nextjs.svg';
import antd from '../../asset/image/icon/antd.svg';
import Image_one from '../../asset/image/guys/sina.png';
import Image_two from '../../asset/image/guys/ali.jpg';
import Image_three from '../../asset/image/guys/sdg.jpg';
import Image_four from '../../asset/image/guys/farshid.jpg';

const Detail = () => {
   let mock_detail = [
      {
         logo: logoImage,
         title: 'iran international exhibition',
         is_active: 0,
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
         url_text: 'expotik.com',
         url_address: 'https://www.apple.com',
      },
   ];
   return (
      <div className={css.projectDetail}>
         {mock_detail.map((eachItem, index) => {
            return (
               <ul className={css.step} key={index}>
                  <li className={css.item}>
                     <div className={css.introduce}>
                        <div
                           className={`${grid.row} ${grid.justifyContentBetween} ${grid.alignItemsCenter}`}>
                           <div className={`${css.projectLogoParent}`}>
                              <div className={css.imageParent}>
                                 <img
                                    src={eachItem.logo}
                                    alt="Developers"
                                    title="Developers"
                                 />
                              </div>
                              <h3 className={css.projectTitle}>
                                 {eachItem.title}
                              </h3>
                           </div>
                           <h4
                              className={`${general.status} ${
                                 !eachItem.is_active
                                    ? general.doing
                                    : general.done
                              }`}>
                              {!eachItem.is_active ? 'in progress' : 'done'}
                           </h4>
                        </div>
                        <p className={css.description}>
                           {eachItem.description}
                        </p>
                     </div>
                  </li>
                  <li className={css.item}>
                     <div className={css.url}>
                        <span>URL :</span>
                        <a
                           target="_blank"
                           rel="noopener noreferrer"
                           href={eachItem.url_address}>
                           {eachItem.url_text}
                        </a>
                     </div>
                  </li>
                  <li className={css.item}>
                     <div className={css.projectImage} />
                  </li>
                  <li className={css.item}>
                     <div className={css.features}>
                        <ul>
                           <li>
                              <h6 className={css.title}>devices :</h6>
                              <div className={css.type}>
                                 <span>
                                    <img
                                       src={android}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={website}
                                       title="web application"
                                       alt=""
                                    />
                                 </span>
                              </div>
                           </li>
                           <li>
                              <h6 className={css.title}>technologies :</h6>
                              <div className={css.type}>
                                 <span>
                                    <img
                                       src={react}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={node}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={next}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={antd}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                              </div>
                           </li>
                           <li className={css.developers}>
                              <h6 className={css.title}>developers :</h6>
                              <div className={css.type}>
                                 <span>
                                    <img
                                       src={Image_two}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={Image_three}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={Image_four}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                                 <span>
                                    <img
                                       src={Image_one}
                                       title="android application"
                                       alt=""
                                    />
                                 </span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
            );
         })}
         <div className={css.contactIcon}>
            <i className={css.isAnimating} />
         </div>
      </div>
   );
};

export default Detail;
