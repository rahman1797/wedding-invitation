import Data from '../../assets/json/invitation.json'

const globalState = {
    data: Data,
    openedInvitation: false
}

const rootReducer = (state = globalState, action) => {
    
    switch (action.type) {
        case "OPEN_INVITATION":
            return { 
                ...state,
                openedInvitation: true
                
            }
        case "CLOSE_INVITATION":
            return { 
                ...state,
                openedInvitation: false
            }

        default: return state;
    }

    // if(action.type === "OPEN_INVITATION"){
    //     .state;
    // }
    
    // return state;
}

export default rootReducer;