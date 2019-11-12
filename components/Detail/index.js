import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// import images
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

//
import {useDetailProject} from '../../hooks/useDetailProject';

const Detail = () => {
   const detail = useDetailProject();
   // console.log('detail context', detail);
   return (
      detail && (
         <div className={css.projectDetail}>
            <ul className={css.step}>
               <li className={css.item}>
                  <div className={css.introduce}>
                     <div
                        className={`${grid.row} ${grid.justifyContentBetween} ${grid.alignItemsCenter}`}>
                        <div className={`${css.projectLogoParent}`}>
                           <div className={css.imageParent}>
                              <img
                                 src={detail.logo}
                                 alt="Developers"
                                 title="Developers"
                              />
                           </div>
                           <h3 className={css.projectTitle}>{detail.title}</h3>
                        </div>
                        <h4
                           className={`${general.status} ${
                              !detail.is_active ? general.doing : general.done
                           }`}>
                           {!detail.is_active ? 'in progress' : 'done'}
                        </h4>
                     </div>
                     <p className={css.description}>{detail.description}</p>
                  </div>
               </li>
               <li className={css.item}>
                  <div className={css.url}>
                     <span>URL :</span>
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={detail.url_address}>
                        {detail.url_text}
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
         </div>
      )
   );
};

export default Detail;
