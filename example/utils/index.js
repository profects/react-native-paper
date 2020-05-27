export function inputReducer(state, action) {
    switch (action.type) {
        case action.type:
            state[action.type] = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}
