import React from 'react';
import PropTypes from 'prop-types';
import {mergeClasses} from "util/StyleUtil";
import styles from './RotationSpinner.module.css';

const RotationSpinner = ({className}) =>
    <div className={mergeClasses(className, styles.main)}/>

RotationSpinner.propTypes = {
  className: PropTypes.string,
};

export default RotationSpinner;
