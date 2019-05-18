import { combineReducers } from "redux";

import MPI_mainPageState from '../MainPagePart/reducer';
import UI_userState from '../UserPart/reducer';
import MI_mapState from '../MapPart/reducer';
import HI_historyState from '../HistoryPart/reducer';

combineReducers({
    MPI_mainPageState,
    UI_userState,
    MI_mapState,
    HI_historyState
})