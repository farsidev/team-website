import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';
import PropTypes from 'prop-types';

const Bio = ({id}) => {
   let mock_bio = [
      {
         id: 0,
         image: '/static/image/guys/ali.jpg',
         name: 'ali sameni',
         job: 'back-end developer',
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
         social: [
            {
               img: '/static/image/icon/instagram.svg',
               link: 'https://www.instagram.com/mohamaad_sdg/',
            },
            {
               img: '/static/image/icon/twitter.svg',
               link: 'https://www.instagram.com/sina_zeini/',
            },
         ],
      },
      {
         id: 1,
         image: '/static/image/guys/farshid.jpg',
         name: 'fr keymanesh',
         job: 'back-end developer',
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
         social: [
            {
               img: '/static/image/icon/instagram.svg',
               link: 'https://www.instagram.com/mohamaad_sdg/',
            },
            {
               img: '/static/image/icon/twitter.svg',
               link: 'https://www.instagram.com/sina_zeini/',
            },
         ],
      },
      {
         id: 2,
         image: '/static/image/guys/sdg.jpg',
         name: 'mreza sadeghi',
         job: 'back-end developer',
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
         social: [
            {
               img: '/static/image/icon/instagram.svg',
               link: 'https://www.instagram.com/mohamaad_sdg/',
            },
            {
               img: '/static/image/icon/twitter.svg',
               link: 'https://www.instagram.com/sina_zeini/',
            },
         ],
      },
      {
         id: 3,
         image: '/static/image/guys/sina.png',
         name: 'sina zeini',
         job: 'back-end developer',
         description:
            'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
         social: [
            {
               img: '/static/image/icon/instagram.svg',
               link: 'https://www.instagram.com/mohamaad_sdg/',
            },
            {
               img: '/static/image/icon/twitter.svg',
               link: 'https://www.instagram.com/sina_zeini/',
            },
         ],
      },
   ];
   const view = () => {
      const selectedBio = {};
      for (const x of mock_bio) {
         x.id === id && Object.assign(selectedBio, x);
      }
      return (
         <div className={`${grid.row} ${general.height100}`}>
            <div className={css.poster}>
               <img src={selectedBio.image} alt="" />
            </div>
            <div className={css.rightSide}>
               <div className={css.top}>
                  <h3>{selectedBio.name}</h3>
                  <h4>{selectedBio.job}</h4>
               </div>
               <div className={css.bottom}>
                  <p>{selectedBio.description}</p>
                  {selectedBio.social.length !== 0 && (
                     <div className={general.socialMedia}>
                        <h6 className={general.socialTitle}>social media :</h6>
                        <ul>
                           {selectedBio.social.map((x, i) => (
                              <li key={i}>
                                 <a href={x.link} target="_balnk">
                                    <img src={x.img} />
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}
               </div>
            </div>
         </div>
      );
   };
   return <div className={css.bioWrapper}>{view()}</div>;
};
Bio.propTypes = {
   id: PropTypes.number.isRequired,
};
export default Bio;
