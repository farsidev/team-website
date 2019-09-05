import React from 'react';
import './Layout.scss';

const Layout = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
};

export default Layout;