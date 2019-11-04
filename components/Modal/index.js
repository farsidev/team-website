import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Portal from '../../lib/Portal';

const Style = {
   modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
   },
   main: {
      position: 'fixed',
      background: 'white',
      width: '80%',
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
   },
};

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
            <div className="backdrop">
               <div className="modal">
                  <div className="inner">{children}</div>
               </div>
            </div>
            <style jsx>{`
               :global(body) {
                  overflow: hidden;
               }

               .backdrop {
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.7);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
               }
               .modal {
                  background-color: white;
                  color: #000;
                  position: absolute;
                  top: 10%;
                  right: 10%;
                  bottom: 10%;
                  left: 10%;
                  padding: 1em;
               }
            `}</style>
         </Portal>
      )
   );
};

export default Modal;
