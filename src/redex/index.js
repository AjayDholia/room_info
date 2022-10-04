import { saveReduce} from "./reducer";
import {createStore,combineReducers} from 'redux'



let store = createStore(combineReducers({
    sar: saveReduce
}));

export default store;