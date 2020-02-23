import React from "react";
import {IntlProvider} from "react-intl-redux";
import {INTL} from "reducers/rootReducer";
import {isImmutable} from "immutable";

const IntlManager = React.memo(({children}) =>
    <IntlProvider intlSelector={state => isImmutable(state.get(INTL)) ? state.get(INTL).toJS() : state.get(INTL)}>
      {children}
    </IntlProvider>);

export default IntlManager;