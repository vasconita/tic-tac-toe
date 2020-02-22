import React, {useCallback} from 'react';
import styles from './HomeView.module.css';
import BackgroundAnimationLines from 'components/background/BackgroundAnimationLines';
import HomeButton from 'components/button/HomeButton';
import {GAME_PATH, RANKING_PATH} from 'routing/routes';
import {startGame} from 'actions/currentGame/currentGameActionsCreators'
import {useDispatch} from 'react-redux';

const HomeView = () =>
{
  // Redux dispatch
  const dispatch = useDispatch();

  // Callbacks
  const onStartButtonClicked = useCallback(() => dispatch(startGame()), [dispatch]);

  return <div className={styles.main}>
    <BackgroundAnimationLines/>
    <div className={styles.titleArea}>
      <span className={styles.title}>Tic Tac Toe</span>
    </div>
    <div className={styles.buttonsArea}>
      <HomeButton className={styles.button} label={'START'} to={GAME_PATH} onClick={onStartButtonClicked}/>
      <HomeButton className={styles.button} label={'RANKING'} to={RANKING_PATH}/>
    </div>
  </div>
};

export default HomeView;
