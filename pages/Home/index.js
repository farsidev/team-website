import React from 'react';
import Head from 'next/head';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// import component
import Header from '../../components/Header';
import Project from '../../components/Project';
import Developer from '../../components/Developer';
import Detail from '../../components/Detail';

const Home = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Farsi Developers Team.</title>
         </Head>
         <div
            className={`${grid.row} ${grid.justifyContentBetween} ${grid.flexWrap}`}>
            <div className={`${css.leftSide}`}>
               <Header />
               <main>
                  <div className={css.inner}>
                     <h1 className={css.titleHeader}>hi, we are developers</h1>
                     <h4 className={css.subtitleHeader}>
                        welcome to our website
                     </h4>
                     <Project />
                     <Developer />
                  </div>
               </main>
            </div>
            <aside className={`${css.rightSide}`}>
               <Detail />
            </aside>
         </div>
      </React.Fragment>
   );
};

export default Home;
