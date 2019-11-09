import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Portal from '../../lib/Portal';
import css from './style.scss';

const Modal = ({children, visible = false}) => {
   const [visibility, setVisibility] = useState(false);

   useEffect(() => {
      setVisibility(visible);
   }, [visible]);
   const handleOpen = () => {
      setVisibility(true);
   };
   const handleClose = () => {
      setVisibility(false);
   };
   console.log(children);
   return (
      visibility && (
         <Portal selector="#modal">
            <div className={css.backdrop}  onClick={() => handleClose()}>
               <div className={css.modal}>
                  <span className={css.close} onClick={() => handleClose()} />
                  <div className={css.inner}>{children}</div>
               </div>
            </div>
         </Portal>
      )
   );
};

export default Modal;
