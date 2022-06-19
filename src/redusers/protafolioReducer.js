const INITIAL_STATE = {

}

const reducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case '':
            return {
                ...state
            };
        default:
            return state;
    }
}

export default reducer