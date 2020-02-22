import React from "react";
import HomeView from "views/home/HomeView";
import GameView from "views/game/GameView";
import NewScoreView from "views/newScore/NewScoreView";
import RankingView from "views/ranking/RankingView";
import {Route, Redirect} from "react-router-dom";
import {HOME_PATH, GAME_PATH, NEW_SCORE, RANKING_PATH} from 'routing/routes'
import {AnimatedSwitch} from 'react-router-transition';
import mainStyles from 'style/MainStyles.module.css'

const Routing = () =>

    <AnimatedSwitch atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                    className={mainStyles.switch}>
      <Route exact path={HOME_PATH} component={HomeView}/>
      <Route exact path={GAME_PATH} component={GameView}/>
      <Route exact path={NEW_SCORE} component={NewScoreView}/>
      <Route exact path={RANKING_PATH} component={RankingView}/>
      <Redirect to={HOME_PATH}/>
    </AnimatedSwitch>;


export default Routing;