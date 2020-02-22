const TOP = 'borderTopColor';
const RIGHT = 'borderRightColor';
const BOTTOM = 'borderBottomColor';
const LEFT = 'borderLeftColor';

export const getAvailableSidesById = (position) =>
{

  switch (position)
  {
    case 0:
      return [LEFT, BOTTOM];
    case 1:
      return [LEFT, BOTTOM, RIGHT];
    case 2:
      return [BOTTOM, RIGHT];
    case 3:
      return [TOP, LEFT, BOTTOM];
    case 4:
      return [TOP, LEFT, BOTTOM, RIGHT];
    case 5:
      return [TOP, BOTTOM, RIGHT];
    case 6:
      return [TOP, LEFT, BOTTOM];
    case 7:
      return [TOP, LEFT, RIGHT];
    case 8:
      return [TOP, RIGHT];
    default:
      return [];

  }
};