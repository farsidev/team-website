import React from 'react';
import PropTypes from 'prop-types';

export const DetatilProjectContext = React.createContext();
export const DetailProjectDispatcherContext = React.createContext();

const initProject = {
   logo: '/static/exhibition.png',
   title: 'iran international exhibition',
   is_active: 0,
   description:
      'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
   url_text: 'expotik.com',
   url_address: 'https://www.apple.com',
   cover: '/static/image/wallpaper/wallpaper_one.jpg',
   devices: [
      {img: '/static/image/icon/android.svg', title: 'android application'},
      {img: '/static/image/icon/laptop.svg', title: 'android application'},
   ],
   technologies: [
      {img: '/static/image/icon/react.svg', title: 'android application'},
      {img: '/static/image/icon/nodejs.svg', title: 'android application'},
      {img: '/static/image/icon/antd.svg', title: 'android application'},
   ],
   developers: [
      {img: '/static/image/guys/sdg.jpg', title: 'android application'},
      {img: '/static/image/guys/sina.png', title: 'android application'},
      {img: '/static/image/guys/ali.jpg', title: 'android application'},
      {img: '/static/image/guys/farshid.jpg', title: 'android application'},
   ],
};
const DetailProjectProvider = ({children}) => {
   const [detailProject, setDetailProject] = React.useState(initProject);
   return (
      <DetatilProjectContext.Provider value={detailProject}>
         <DetailProjectDispatcherContext.Provider value={setDetailProject}>
            {children}
         </DetailProjectDispatcherContext.Provider>
      </DetatilProjectContext.Provider>
   );
};
DetailProjectProvider.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
      .isRequired,
};
export default DetailProjectProvider;
