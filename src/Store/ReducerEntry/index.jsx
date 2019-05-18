import {combineReducers} from "redux";

import MPI_mainPageState from '../MainPagePart/reducer';
import MI_mapState from '../MapPart/reducer';
import HI_historyState from '../HistoryPart/reducer';
import LPI_loginPageState from '../LoginFormPart/reducer';
import RPI_registrationPageState from '../RegistrationFormPart/reducer';
import UCI_userCredentialsState from '../UserCredentials/reducer';
import AU_authState from '../Auth/reducer'
import RPI_routesPartState from '../RoutesPart/reducer';
import PUI_positionUser from '../UserPosition/reducer';

export default combineReducers({
    MPI_mainPageState,
    MI_mapState,
    HI_historyState,
    LPI_loginPageState,
    RPI_registrationPageState,
    UCI_userCredentialsState,
    AU_authState,
    RPI_routesPartState,
    PUI_positionUser,
})