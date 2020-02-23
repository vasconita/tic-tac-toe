import React from 'react';
import PropTypes from 'prop-types';

const CircleIcon = React.memo(({className}) =>
{
  return <svg className={className} viewBox="0 0 512 512">
    <path d="M255.832,56.037c110.44,0.096,199.891,89.691,199.795,200.131s-89.691,199.891-200.131,199.795
	C145.127,455.867,55.701,366.368,55.701,256C55.877,145.568,145.399,56.117,255.832,56.037 M255.832,0
	C114.443,0.096-0.096,114.779,0,256.168S114.779,512.096,256.168,512C397.485,511.904,512,397.317,512,256
	C511.952,114.571,397.261-0.048,255.832,0z"/>

  </svg>

});

CircleIcon.propTypes = {
  className: PropTypes.string,
};

export default CircleIcon;