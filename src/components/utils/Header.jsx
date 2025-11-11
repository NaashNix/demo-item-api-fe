import React from 'react';
import styles from './Header.module.css';

function Header(props) {
   return(
      <div className={styles.headerContainer} >
         <span>{props.title}</span>
         <hr />
      </div>
   );
}


export default Header;