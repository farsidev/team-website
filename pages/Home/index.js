import React from 'react';
import Head from 'next/head';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';
import Modal from '../../components/Modal';

// import component
import Header from '../../components/Header';
import Project from '../../components/Project';
import Developer from '../../components/Developer';
import Detail from '../../components/Detail';
import Contact from '../../components/Contact';

// logic
import DetailProjectProvider from '../../provider/detailProject';

const Home = () => {
   const [visibilityModal, setVisibilityModal] = React.useState(false);

   const handleModal = () => {
      setVisibilityModal(true);
   };
   const handleClose = () => {
      setVisibilityModal(false);
   };
   return (
      <>
         <Head>
            <title>Farsi Developers Team.</title>
         </Head>
         <main
            className={`${grid.row} ${grid.justifyContentBetween} ${grid.flexWrap}`}>
            <DetailProjectProvider>
               <div className={`${css.leftSide}`}>
                  <Header />
                  <div className={css.inner}>
                     <h1 className={css.titleHeader}>hi, we are developers</h1>
                     <h4 className={css.subtitleHeader}>
                        welcome to our website
                     </h4>
                     <Project />
                     <Developer />
                  </div>
               </div>
               <aside className={`${css.rightSide}`}>
                  <Detail />
                  <div className={css.contactIcon} onClick={handleModal}>
                     <i className={css.isAnimating} />
                  </div>
               </aside>
            </DetailProjectProvider>
            <Modal visible={visibilityModal} hideModal={handleClose}>
               <Contact />
            </Modal>
         </main>
      </>
   );
};

export default Home;
