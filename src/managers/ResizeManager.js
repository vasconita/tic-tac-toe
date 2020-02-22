import {useEffect, useCallback} from 'react';
import {changeWindowSize} from 'actions/screen/screenActionsCreators';
import {useDispatch} from "react-redux";

/**
 * Wrapper component that is used only to record the screen size
 */
const ResizeManager = ({children}) =>
{

  // Redux dispatch
  const dispatch = useDispatch();

  // Callbacks
  const updateWindowSize = useCallback(() =>
      {
        dispatch(changeWindowSize(window.innerWidth, window.innerHeight))
      },
      [dispatch]);

  // Resize listeners
  const addResizeListeners = () =>
  {
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("orientationchange", updateWindowSize, false);
  };

  const removeResizeListeners = () =>
  {
    window.removeEventListener("resize", updateWindowSize, false);
    window.removeEventListener("orientationchange", updateWindowSize, false);
  };

  // Effects
  useEffect(() =>
  {
    updateWindowSize();
    addResizeListeners();

    return removeResizeListeners;
  });

  return children;
};

export default ResizeManager;