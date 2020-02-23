import React from 'react';
import PropTypes from 'prop-types';

const UnitedKingdomFlagIcon = React.memo(({className}) =>
{
  return <svg className={className} viewBox="0 0 512 512">
    <circle style={{fill: "#F0F0F0"}} cx="256" cy="256" r="256"/>
    <g>
      <path style={{fill: "#0052B4"}}
            d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"/>
      <path style={{fill: "#0052B4"}}
            d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"/>
      <path style={{fill: "#0052B4"}} d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784
		z"/>
      <path style={{fill: "#0052B4"}}
            d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"/>
      <path style={{fill: "#0052B4"}}
            d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"/>
      <path style={{fill: "#0052B4"}} d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"/>
      <path style={{fill: "#0052B4"}}
            d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"/>
      <path style={{fill: "#0052B4"}}
            d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"/>
    </g>
    <g>
      <path style={{fill: "#D80027"}} d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0
		c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391
		h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442
		C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"/>
      <path style={{fill: "#D80027"}} d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435
		l-97.802-97.802h-31.482V322.784z"/>
      <path style={{fill: "#D80027"}} d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804
		V322.784z"/>
      <path style={{fill: "#D80027"}} d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803
		H189.217z"/>
      <path style={{fill: "#D80027"}} d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047
		l-97.802,97.803V189.219z"/>
    </g>
  </svg>

});

UnitedKingdomFlagIcon.propTypes = {
  className: PropTypes.string,
};

export default UnitedKingdomFlagIcon;