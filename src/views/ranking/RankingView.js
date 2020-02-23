import React from 'react';
import styles from './RankingView.module.css';

const RankingView = React.memo((props) =>
{
  return <div className={styles.main}>
    <span className={styles.message}/>
  </div>
});

export default RankingView;