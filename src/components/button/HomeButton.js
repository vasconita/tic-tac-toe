import React from 'react';
import styles from './HomeButton.module.css'
import PropTypes from 'prop-types';
import {mergeClasses} from "util/StyleUtil";
import {Link} from 'react-router-dom';

const HomeButton = ({label, className, to, onClick}) =>
    <Link className={mergeClasses(styles.main, className)}
          to={to} onClick={onClick}>
      {label}
    </Link>;

HomeButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default HomeButton
