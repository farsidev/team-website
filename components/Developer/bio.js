import React from 'react';
import Link from 'next/link';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';
import image_one from '../../asset/image/guys/ali.jpg';
import Instagram from '../../asset/image/icon/instagram.svg';
import Linkedin from '../../asset/image/icon/linkedin.svg';
import Twitter from '../../asset/image/icon/twitter.svg';
import Github from '../../asset/image/icon/github.svg';

const Bio = () => {
   let mock_bio = [
      {
         image: image_one,
         name: 'ali sameni',
         job: 'back-end developer',
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
      },
   ];
   return (
      <div className={css.bioWrapper}>
         {mock_bio.map((eachItem, index) => {
            return (
               <div className={`${grid.row} ${general.height100}`} key={index}>
                  <div className={css.poster}>
                     <img src={eachItem.image} alt="" />
                  </div>
                  <div className={css.rightSide}>
                     <div className={css.top}>
                        <h3>{eachItem.name}</h3>
                        <h4>{eachItem.job}</h4>
                     </div>
                     <div className={css.bottom}>
                        <p>{eachItem.description}</p>
                        <div className={general.socialMedia}>
                           <h6 className={general.socialTitle}>
                              social media :
                           </h6>
                           <ul>
                              <li>
                                 <Link href="#">
                                    <a>
                                       <img src={Instagram} />
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="#">
                                    <a>
                                       <img src={Linkedin} />
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="#">
                                    <a>
                                       <img src={Twitter} />
                                    </a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="#">
                                    <a>
                                       <img src={Github} />
                                    </a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Bio;
