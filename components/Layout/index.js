import React from 'react';
import PropTypes from 'prop-types';

const Layout = props => {
   return <React.Fragment>{props.children}</React.Fragment>;
};

Layout.propTypes = {
   children: PropTypes.elementType,
};

export default Layout;
