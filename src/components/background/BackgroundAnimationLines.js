import React from 'react';
import styles from './BackgroundAnimationLines.module.css'

export default React.memo(() =>
    <div className={styles.main}>
      <div className={styles.line}/>
      <div className={styles.line}/>
      <div className={styles.line}/>
      <div className={styles.line}/>
    </div>);
