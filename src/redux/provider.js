// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';


function provider({children}) {
    return (
        <div></div>
//     <provider store={store}>
// {children}
//     </provider>
    );
};

export default provider;