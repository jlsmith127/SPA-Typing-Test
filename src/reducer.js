//Reducer

function timer(state, action) {
    if (state === undefined) {
        return { seconds: 0 };
    }

    var seconds = state.seconds;

    if (action.type === "count") {
            return { seconds: seconds + 1 };
    } else { return state; }
}

export default timer;