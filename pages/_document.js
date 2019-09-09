import React from 'react';

import Document, {Head, Main, NextScript} from 'next/document';

export default class myDocument extends Document {
   render() {
      return (
         <html>
            <Head>
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="../static/favicon.ico"
               />
               <meta name="description" content="Grow Your Business With Us" />
               <meta
                  name="keywords"
                  content="HTML,CSS,REACTJS,JavaScript,NODEJS,REACTNATIVE"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </html>
      );
   }
}
