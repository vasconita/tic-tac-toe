import {BORDER_PROPORTION} from 'components/grid/GridEntry';

const MAX_GRID_SIZE_IN_PX = 1000;
const MIN_MARGIN_IN_PX = 30;

export const getGameViewStyles = (windowWidth, windowHeight) =>
{

  let gridSizeInPx;
  const windowSmallerSizeInPx = Math.min(windowWidth, windowHeight);

  if (windowSmallerSizeInPx > MAX_GRID_SIZE_IN_PX)
  {
    gridSizeInPx = MAX_GRID_SIZE_IN_PX;
  } else
  {
    gridSizeInPx = windowSmallerSizeInPx - MIN_MARGIN_IN_PX;
  }

  const gridEntrySizeInPx = Math.floor(gridSizeInPx / 3);

  const gridBorderWidth = Math.ceil(gridEntrySizeInPx * BORDER_PROPORTION);

  const gridEntryInlineStyles = {
    borderWidth: gridBorderWidth,
    width: `calc(100% - ${gridBorderWidth * 2}px)`,
    height: `calc(100% - ${gridBorderWidth * 2}px)`,
  };

  const gridSize = `${gridEntrySizeInPx * 3}px`;

  const gridInlineStyles = {
    width: gridSize,
    height: gridSize,
  };

  return {
    gridEntryInlineStyles,
    gridInlineStyles,
    gridEntrySizeInPx,
  }
};

