const initState = {
    count: 0
}
export const countReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'ASYNCE_INCRE':
            return { count: state.count + 2 }
        default:
            return state
    }
}