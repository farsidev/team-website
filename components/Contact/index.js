import React from 'react';
import general from '../../asset/style/general.scss';
import css from './style.scss';

const Contact = () => {
   return (
      <div className={css.contactForm}>
         <div className={css.blackTitle}>
            <h3>contact us</h3>
         </div>
         <form>
            <ul>
               <li>
                  <label className={general.label}>subject :</label>
                  <select className={general.select}>
                     <option>website</option>
                     <option>android</option>
                     <option>ios</option>
                     <option>wordpress</option>
                     <option>desktop </option>
                  </select>
               </li>
               <li>
                  <label className={general.label}>
                     full name :{' '}
                     <span className={general.alert}>
                        Please input your full name!
                     </span>
                  </label>
                  <input className={`${general.input} ${general.alert}`} placeholder="Keanu Reeves" />
               </li>
               <li>
                  <label className={general.label}>email :</label>
                  <input
                     className={general.input}
                     placeholder="example@mail.com"
                     type="email"
                  />
               </li>
               <li>
                  <label className={general.label}>phone number :</label>
                  <input className={general.input} placeholder="+1 23423434" />
               </li>
               <li className={css.messageBox}>
                  <label className={general.label}>message :</label>
                  <textarea
                     className={general.textArea}
                     placeholder="type your message..."></textarea>
               </li>
               <li className={css.uploadForm}>
                  <label className={general.label}>upload file :</label>
                  <div className={general.upload}>
                     <input type="file" />
                     <div className={general.file}></div>
                  </div>
               </li>
               <li>
                  <button className={general.sendButton}>send</button>
               </li>
            </ul>
         </form>
      </div>
   );
};

export default Contact;
