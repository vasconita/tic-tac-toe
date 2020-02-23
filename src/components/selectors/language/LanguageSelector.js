import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import styles from './LanguageSelector.module.css';
import {mergeClasses} from "util/StyleUtil";
import RoundedButton from 'components/button/rounded/RoundedButton';
import SpainFlagIcon from 'icons/flags/SpainFlagIcon';
import FranceFlagIcon from 'icons/flags/FranceFlagIcon';
import UnitedKingdomFlagIcon from 'icons/flags/UnitedKingdomFlagIcon';
import {useDispatch} from "react-redux";
import enUK from 'intl/messages/enUK';
import esES from 'intl/messages/esES';
import frFR from 'intl/messages/frFR';
import {ENGLISH_UK, SPANISH_SPAIN, FRENCH_FRANCE} from "intl/LanguagesCodes";
import {updateIntl} from "react-intl-redux";


const LanguageSelector = React.memo(({className}) =>
{

  // Redux dispatch
  const dispatch = useDispatch();

  // Callbacks
  const onEnglishSelected = useCallback(() => dispatch(updateIntl({
    locale: ENGLISH_UK,
    messages: enUK
  })), [dispatch]);
  const onSpanishSelected = useCallback(() => dispatch(updateIntl({
    locale: SPANISH_SPAIN,
    messages: esES
  })), [dispatch]);
  const onFrenchSelected = useCallback(() => dispatch(updateIntl({
    locale: FRENCH_FRANCE,
    messages: frFR
  })), [dispatch]);


  return <div className={mergeClasses(styles.main, className)}>

    <RoundedButton className={styles.button} icon={UnitedKingdomFlagIcon} onClick={onEnglishSelected}/>
    <RoundedButton className={styles.button} icon={SpainFlagIcon} onClick={onSpanishSelected}/>
    <RoundedButton className={styles.button} icon={FranceFlagIcon} onClick={onFrenchSelected}/>
  </div>
});

LanguageSelector.propTypes = {
  className: PropTypes.string,
};


export default LanguageSelector;