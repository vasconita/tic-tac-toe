import React from 'react';
import styles from './RoundedButton.module.css'
import PropTypes from 'prop-types';
import {mergeClasses} from "util/StyleUtil";

const RoundedButton = React.memo(({className, onClick, icon: Icon}) =>
    <div className={mergeClasses(styles.main, className)} onClick={onClick}>
      <Icon className={styles.icon}/>
    </div>);

RoundedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
};

export default RoundedButton
