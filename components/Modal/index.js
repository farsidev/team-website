import React, {useState, useEffect, useRef} from 'react';
import Portal from '../../lib/Portal';
import css from './style.scss';
import PropTypes from 'prop-types';

const Modal = ({children, visible, hideModal}) => {
   const [visibility, setVisibility] = useState(false);
   const bodyModal = useRef(null);

   useEffect(() => {
      setVisibility(visible);
   }, [visible]);

   const handleClose = e => {
      bodyModal.current.contains(e.target) ? null : hideModal();
      // console.log('e', e.target);
      // console.log('bodyModal', bodyModal.current);
      // console.log(bodyModal.current.contains(e.target));
   };
   return (
      visibility && (
         <Portal selector="#modal">
            <div className={css.backdrop} onClick={e => handleClose(e)}>
               <div className={css.modal}>
                  <span className={css.close} onClick={() => hideModal()} />
                  <div className={css.inner} ref={bodyModal}>
                     {children}
                  </div>
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
