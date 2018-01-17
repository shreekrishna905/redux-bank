import {ReduceStore} from "flux/utils"
import constants from "../constants";
import AppDispatcher from "../AppDispatcher";
class AirportStore extends ReduceStore {

    getInitialState(){
        return [];
    }

    reduce(state, action){
        switch(action.type){
            case constants.FETCH_AIRPORTS_SUCCESS:
                return action.payload.response;

            default:
                return state;
        }
    }
}

export default new AirportStore(AppDispatcher);