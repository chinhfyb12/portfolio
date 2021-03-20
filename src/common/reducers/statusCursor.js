const initialState = false

export default (state = initialState, { type }) => {
    switch (type) {

    case 'CHANGE_STATUS_CURSOR':
        return !state;

    default:
        return state
    }
}
