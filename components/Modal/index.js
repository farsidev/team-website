import React, {useState, useEffect} from 'react';
import Portal from '../../lib/Portal';
import css from './style.scss';
import PropTypes from 'prop-types';

const Modal = ({children, visible, hideModal}) => {
   const [visibility, setVisibility] = useState(false);

   useEffect(() => {
      setVisibility(visible);
   }, [visible]);

   const handleClose = () => {
      hideModal();
   };
   return (
      visibility && (
         <Portal selector="#modal">
            <div className={css.backdrop} onClick={() => handleClose()}>
               <div className={css.modal}>
                  <span className={css.close} onClick={hideModal} />
                  <div className={css.inner}>{children}</div>
               </div>
            </div>
         </Portal>
      )
   );
};
Modal.propTypes = {
   // property
   visible: PropTypes.bool,
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
      .isRequired,
   // method
   hideModal: PropTypes.func,
};
Modal.defaultProps = {
   visible: false,
};

export default Modal;
