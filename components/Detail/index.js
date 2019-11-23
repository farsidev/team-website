import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

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
                              detail.is_active ? general.doing : general.done
                           }`}>
                           {detail.is_active ? 'in progress' : 'done'}
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
                  <div
                     className={css.projectImage}
                     style={{backgroundImage: `url(${detail.cover})`}}
                  />
               </li>
               <li className={css.item}>
                  <div className={css.features}>
                     <ul>
                        {detail.devices.length !== 0 && (
                           <li>
                              <h6 className={css.title}>devices :</h6>
                              <div className={css.type}>
                                 {detail.devices.map((x, i) => (
                                    <span key={i}>
                                       <img
                                          src={x.img}
                                          title={x.title}
                                          alt={x.title}
                                       />
                                    </span>
                                 ))}
                              </div>
                           </li>
                        )}
                        {detail.technologies.length !== 0 && (
                           <li>
                              <h6 className={css.title}>technologies :</h6>
                              <div className={css.type}>
                                 {detail.technologies.map((x, i) => (
                                    <span key={i}>
                                       <img
                                          src={x.img}
                                          title={x.title}
                                          alt={x.title}
                                       />
                                    </span>
                                 ))}
                              </div>
                           </li>
                        )}
                        {detail.developers.length !== 0 && (
                           <li className={css.developers}>
                              <h6 className={css.title}>developers :</h6>
                              <div className={css.type}>
                                 {detail.developers.map((x, i) => (
                                    <span key={i}>
                                       <img
                                          src={x.img}
                                          title={x.title}
                                          alt={x.title}
                                       />
                                    </span>
                                 ))}
                              </div>
                           </li>
                        )}
                     </ul>
                  </div>
               </li>
            </ul>
         </div>
      )
   );
};

export default Detail;
