import React from 'react';
import styles from './GameView.module.css'
import {useSelector} from "react-redux";
import {GRID_KEYS} from 'actions/currentGame/currentGameConstants';
import GridEntry from 'components/grid/GridEntry';
import {getGameViewStyles} from './GameViewStyleUtils';
import RotationSpinner from 'components/spinners/RotationSpinner';
import {mergeClasses} from "util/StyleUtil";
import * as rootReducer from "reducers/rootReducer";

const GameView = React.memo(() =>
{
  // Redux selectors
  const windowWidth = useSelector(state => rootReducer.getWindowWidth(state));
  const windowHeight = useSelector(state => rootReducer.getWindowHeight(state));
  const canUserSelect = useSelector(state => rootReducer.canUserSelect(state));

  // Styles
  const {
    gridInlineStyles,
    gridEntryInlineStyles,
    gridEntrySizeInPx
  } = getGameViewStyles(windowWidth, windowHeight);

  const getSpinnerClasses = () =>
  {
    let result = styles.spinner;

    if (canUserSelect)
    {
      result = mergeClasses(result, styles.spinner_off);
    } else
    {
      result = mergeClasses(result, styles.spinner_on);
    }
    return result;
  };

  return <div className={styles.main}>
    <div className={styles.grid} style={gridInlineStyles}>
      {/* Create 9 cells */}
      {GRID_KEYS.map(key => <GridEntry id={key} key={key} sizeInPx={gridEntrySizeInPx}/>)}
      <div className={styles.gridBorder} style={gridEntryInlineStyles}/>
    </div>
    <RotationSpinner className={getSpinnerClasses()}/>
  </div>;
});


export default GameView;