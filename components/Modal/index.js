import React, {useState} from 'react';
import Modal from 'react-modal';

const MyModal = () => {
   const [visibility, setVisibility] = useState(false);

   const openModal = () => {
      setVisibility(true);
   };
   const closeModal = () => {
      setVisibility(false);
   };

   return (
      <Modal
         isOpen={visibility}
         onRequestClose={closeModal}
         contentLabel="Example Modal">
         {/*
          * body modal
          */}

         <button onClick={closeModal}>close</button>
         <div>I am a modal</div>
         <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
         </form>
      </Modal>
   );
};

export default MyModal;
