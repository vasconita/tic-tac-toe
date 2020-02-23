import React, {useCallback} from 'react';
import styles from './HomeView.module.css';
import BackgroundAnimationLines from 'components/background/BackgroundAnimationLines';
import HomeButton from 'components/button/home/HomeButton';
import {GAME_PATH} from 'routing/routes';
import {startGame} from 'actions/currentGame/currentGameActionsCreators'
import {useDispatch} from 'react-redux';
import {useIntl, defineMessages} from "react-intl";
import LanguageSelector from 'components/selectors/language/LanguageSelector';

export const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: 'Tic Tac Toe'
  },
  start: {
    id: 'home.start',
    defaultMessage: 'Start'
  },

});

const HomeView = React.memo(() =>
{
  // Redux dispatch
  const dispatch = useDispatch();

  // Intl
  const intl = useIntl();

  // Callbacks
  const onStartButtonClicked = useCallback(() => dispatch(startGame()), [dispatch]);

  return <div className={styles.main}>
    <BackgroundAnimationLines/>
    <div className={styles.titleArea}>
      <span className={styles.title}>{intl.formatMessage(messages.title)}</span>
    </div>
    <div className={styles.buttonsArea}>
      <HomeButton className={styles.button} label={intl.formatMessage(messages.start)} to={GAME_PATH}
                  onClick={onStartButtonClicked}/>
      {/* <HomeButton className={styles.button} label={'RANKING'} to={RANKING_PATH}/>*/}
      <LanguageSelector className={styles.languageSelector}/>
    </div>
  </div>
});

export default HomeView;
