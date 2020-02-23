import React, {useCallback} from 'react';
import styles from './NewScoreView.module.css';
import {getWinner, getScore} from "reducers/rootReducer";
import {useDispatch, useSelector} from "react-redux";
import {USER, MACHINE} from 'actions/currentGame/currentGameConstants'
import BackgroundAnimationLines from "components/background/BackgroundAnimationLines";
import {defineMessages, useIntl} from "react-intl";
import HomeButton from "components/button/home/HomeButton";
import {GAME_PATH, HOME_PATH} from "routing/routes";
import {startGame} from "actions/currentGame/currentGameActionsCreators";
import {mergeClasses} from "util/StyleUtil";

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
  playAgain: {
    id: 'score.playAgain',
    defaultMessage: 'Play again'
  },
  menu: {
    id: 'score.menu',
    defaultMessage: 'Menu'
  },

});

const NewScoreView = React.memo(() =>
{
  // Redux selectors
  const winner = useSelector(state => getWinner(state));
  const score = useSelector(state => getScore(state));

  // Redux dispatch
  const dispatch = useDispatch();

  // Intl
  const intl = useIntl();

  let resultMessage;
  let resultClassName;

  if (winner === USER)
  {
    resultMessage = intl.formatMessage(messages.win);
    resultClassName = styles.win;
  } else if (winner === MACHINE)
  {
    resultMessage = intl.formatMessage(messages.lose);
    resultClassName = styles.lose;
  } else
  {
    resultMessage = intl.formatMessage(messages.tie);
    resultClassName = styles.tie;
  }

  // Callbacks
  const onStartButtonClicked = useCallback(() => dispatch(startGame()), [dispatch]);

  return <div className={mergeClasses(styles.main, resultClassName)}>
    <BackgroundAnimationLines/>
    <span className={styles.resultMessage}>{resultMessage}</span>
    <span className={styles.scoreMessage}>{`${intl.formatMessage(messages.score)} ${score}`}</span>

    <HomeButton className={styles.button} label={intl.formatMessage(messages.playAgain)} to={GAME_PATH}
                onClick={onStartButtonClicked}/>
    <HomeButton className={styles.button} label={intl.formatMessage(messages.menu)} to={HOME_PATH}/>
  </div>
});

export default NewScoreView;