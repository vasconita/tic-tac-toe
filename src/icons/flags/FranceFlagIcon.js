import React from 'react';
import PropTypes from 'prop-types';

const FranceFlagIcon = React.memo(({className}) =>
{
  return <svg className={className} viewBox="0 0 512 512">
    <circle style={{fill: "#F0F0F0"}} cx="256" cy="256" r="256"/>
    <path style={{fill: "#D80027"}}
          d="M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"/>
    <path style={{fill: "#0052B4"}}
          d="M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"/>
  </svg>
});

FranceFlagIcon.propTypes = {
  className: PropTypes.string,
};

export default FranceFlagIcon;