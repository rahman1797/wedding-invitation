import Data from '../../assets/json/invitation.json'

const globalState = {
    data: Data
}

const rootReducer = (state = globalState, action) => {

    if(action.type === "FILTER_GROUP"){
        return state;
    }
    if(action.type === "FILTER_INDIVIDUAL"){
        return state;
    }
    
    return state;
}

export default rootReducer;