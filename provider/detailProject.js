import React from 'react';
import PropTypes from 'prop-types';

export const DetatilProjectContext = React.createContext();
export const DetailProjectDispatcherContext = React.createContext();

import logoImage from '../asset/image/shark.svg';

const initProject = {
   // logo: path.join(rootDir, 'asset', 'image', 'shark.svg'),
   logo: logoImage,
   title: 'iran international exhibition',
   is_active: 0,
   description:
      'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
   url_text: 'expotik.com',
   url_address: 'https://www.apple.com',
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
