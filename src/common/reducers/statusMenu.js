const initialState = false

export default (state = initialState, { type }) => {
    switch (type) {

    case 'SHOW_HIDE_MENU':
        return !state

    default:
        return state
    }
}
