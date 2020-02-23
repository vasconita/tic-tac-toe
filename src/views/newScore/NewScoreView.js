import React from 'react';
import styles from './NewScoreView.module.css';
import {getWinner, getScore} from "reducers/rootReducer";
import {useSelector} from "react-redux";
import {USER, MACHINE} from 'actions/currentGame/currentGameConstants'
import BackgroundAnimationLines from "components/background/BackgroundAnimationLines";
import {defineMessages, useIntl} from "react-intl";

export const messages = defineMessages({
  win: {
    id: 'score.win',
    defaultMessage: 'You win!'
  },
  lose: {
    id: 'score.lose',
    defaultMessage: 'You lost...'
  },
  tie: {
    id: 'score.tie',
    defaultMessage: 'Nobody wins'
  },
  score: {
    id: 'score.score',
    defaultMessage: 'Your score is'
  },

});

const NewScoreView = () =>
{
  // Redux selectors
  const winner = useSelector(state => getWinner(state));
  const score = useSelector(state => getScore(state));

  // Intl
  const intl = useIntl();

  let resultMessage;

  if (winner === USER)
  {
    resultMessage = intl.formatMessage(messages.win);
  } else if (winner === MACHINE)
  {
    resultMessage = intl.formatMessage(messages.lose);
  } else
  {
    resultMessage = intl.formatMessage(messages.tie);
  }

  return <div className={styles.main}>
    <BackgroundAnimationLines/>
    <span className={styles.resultMessage}>{resultMessage}</span>
    <span className={styles.scoreMessage}>{`${intl.formatMessage(messages.score)} ${score}`}</span>
  </div>
};

export default NewScoreView;