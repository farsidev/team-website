import React, {useState} from 'react';
import general from '../../asset/style/general.scss';
import css from './style.scss';
import Modal from '../../components/Modal';
import Bio from './bio';

const Developer = () => {
   const [modal, setModal] = useState({Visibility: false, cmp: 0});
   let mock_developer = [
      {
         image: '/static/image/guys/ali.jpg',
         title: 'ali sameni',
         subtitle: 'back-end developer',
         content: <Bio id={0} />,
      },
      {
         image: '/static/image/guys/farshid.jpg',
         title: 'fr keymanesh',
         subtitle: 'UI / UX designer',
         content: <Bio id={1} />,
      },
      {
         image: '/static/image/guys/sdg.jpg',
         title: 'mreza sadeghi',
         subtitle: 'front-end developer',
         content: <Bio id={2} />,
      },
      {
         image: '/static/image/guys/sina.png',
         title: 'sina zeini',
         subtitle: 'front-end developer',
         content: <Bio id={3} />,
      }
   ];
   const handleModal = id => {
      setModal({Visibility: true, cmp: id});
   };
   const handleClose = () => {
      setModal({Visibility: false, cmp: 0});
   };
   return (
      <div className={css.developersWrapper}>
         <h4 className={css.mainTitle}>
            our team <span className={general.count}>(5)</span>
         </h4>
         <ul className={css.step}>
            {mock_developer.map((eachItem, index) => {
               return (
                  <li
                     className={css.item}
                     key={index}
                     onClick={() => handleModal(index)}>
                     <div className={css.developerBox}>
                        <img src={eachItem.image} alt="" />
                     </div>
                     <h5 className={css.title}>{eachItem.title}</h5>
                     <h5 className={css.subTitle}>{eachItem.subtitle}</h5>
                  </li>
               );
            })}
         </ul>
         <Modal visible={modal.Visibility} hideModal={handleClose}>
            {mock_developer[modal.cmp].content}
         </Modal>
      </div>
   );
};

export default Developer;
