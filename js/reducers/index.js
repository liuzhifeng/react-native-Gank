/**
 * Created by wangdi on 23/11/16.
 */
'use strict';

import {combineReducers} from 'redux';
import homeDataState from './homeDataState';
import targetDataState from './targetDataState';
import settingState from './settingState';
import favorDataState from './favorDataState';
import randomDataState from './randomDataState';

export default combineReducers({
    homeDataState, targetDataState, settingState, favorDataState, randomDataState
});