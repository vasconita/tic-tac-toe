import React from 'react';
import styles from './NewScoreView.module.css';
import {getWinner, getScore} from "reducers/rootReducer";
import {useSelector} from "react-redux";
import {USER, MACHINE} from 'actions/currentGame/currentGameConstants'
import BackgroundAnimationLines from "components/background/BackgroundAnimationLines";

const NewScoreView = () =>
{

  // Redux selectors
  const winner = useSelector(state => getWinner(state));
  const score = useSelector(state => getScore(state));

  let resultMessage;

  if (winner === USER)
  {
    resultMessage = 'You win!!'
  } else if (winner === MACHINE)
  {
    resultMessage = 'You lost...'
  } else
  {
    resultMessage = 'Nobody wins'
  }

  return <div className={styles.main}>
    <BackgroundAnimationLines/>
    <span className={styles.resultMessage}>{resultMessage}</span>
    <span className={styles.scoreMessage}>{`Your score is ${score}`}</span>
  </div>
};

export default NewScoreView;