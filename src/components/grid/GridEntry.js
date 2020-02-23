import React from 'react';
import Proptypes from 'prop-types';
import styles from './GridEntry.module.css'
import {useDispatch, useSelector} from 'react-redux';
import * as rootReducer from "reducers/rootReducer"
import {selectGridEntry} from 'actions/currentGame/currentGameActionsCreators';
import {SELECTED_BY_USER, SELECTED_BY_MACHINE} from 'actions/currentGame/currentGameConstants';
import {mergeClasses} from "util/StyleUtil";
import CircleIcon from "icons/CircleIcon";
import CrossIcon from "icons/CrossIcon";

export const BORDER_PROPORTION = 0.05;

const GridEntry = React.memo(({id, sizeInPx}) =>
{
  // Redux selectors
  const gridEntryContent = useSelector(state => rootReducer.getGridEntryContent(state, id));
  const canUserSelect = useSelector(state => rootReducer.canUserSelect(state));

  // Redux dispatch

  const dispatch = useDispatch();

  // Styles
  const borderWidth = Math.floor(sizeInPx * BORDER_PROPORTION) || 0;
  const innerSize = sizeInPx - borderWidth * 2;

  let mainInlineStyles = {
    borderWidth,
    width: innerSize,
    height: innerSize,
  };

  let mainClassNames = styles.main;

  const gridEntryIsSelectable = canUserSelect && !gridEntryContent;
  if (gridEntryIsSelectable)
  {
    mainClassNames = mergeClasses(mainClassNames, styles.selectable);
  }

  // Getters
  const getIcon = () =>
  {
    if (gridEntryContent === SELECTED_BY_USER)
    {
      return <CrossIcon className={mergeClasses(styles.icon, styles.icon_selectedByUser)}/>
    } else if (gridEntryContent === SELECTED_BY_MACHINE)
    {
      return <CircleIcon className={mergeClasses(styles.icon, styles.icon_selectedByMachine, styles.icon_enabled)}/>
    } else if (!gridEntryContent && canUserSelect)
    {
      return <CrossIcon className={mergeClasses(styles.icon, styles.icon_selectedByUser, styles.icon_forOverState)}/>
    } else
    {
      return <CircleIcon className={mergeClasses(styles.icon, styles.icon_selectedByMachine, styles.icon_disabled)}/>
    }
  };

  // Callbacks
  const onClick = () => gridEntryIsSelectable && dispatch(selectGridEntry(id));

  return <div className={mainClassNames} onClick={onClick}
              style={mainInlineStyles}>
    <span className={gridEntryContent === SELECTED_BY_USER ? styles.selectedByUser : styles.selectedByMachine}>
      {getIcon()}
    </span>

  </div>;
});

GridEntry.propTypes = {
  id: Proptypes.number,
  sizeInPx: Proptypes.number,
};

export default GridEntry;