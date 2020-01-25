const updateWindowSize = width => dispatch => {
    dispatch({ type: "UPDATING_SCREEN_SIZE", width });
};

export { updateWindowSize };