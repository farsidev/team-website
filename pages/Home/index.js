import React from 'react';
import Head from 'next/head';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// import component
import Header from '../../components/Header';
import Project from '../../components/Project';
import Developer from '../../components/Developer';
import Detail from '../../components/Detail';

// logic
import DetailProjectProvider from '../../provider/detailProject';

const Home = () => {
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
                  <div className={css.contactIcon}>
                     <i className={css.isAnimating} />
                  </div>
               </aside>
            </DetailProjectProvider>
         </main>
      </>
   );
};

export default Home;
