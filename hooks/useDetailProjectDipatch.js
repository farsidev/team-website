import React from 'react';
import {DetailProjectDispatcherContext} from '../provider/detailProject';

const useDetailProjectDispatch = () =>
   React.useContext(DetailProjectDispatcherContext);
export {useDetailProjectDispatch};
