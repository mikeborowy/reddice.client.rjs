export const types = {
    AJAX_CALL_START: 'AJAX_CALL_START',
    AJAX_CALL_END: 'AJAX_CALL_END',
    AJAX_CALL_ERROR: 'AJAX_CALL_ERROR',
    RECEIVE_DATA: 'RECEIVE_DATA'
}

export const ajaxCallStart = () => ({type: types.AJAX_CALL_START});
export const ajaxCallEnd = () => ({type: types.AJAX_CALL_END});
export const ajaxCallError = () => ({type: types.AJAX_CALL_ERROR});

export const receiveData = (data) => ({type: types.RECEIVE_DATA, data: data});

export const fetchData = () => {

    return (dispatch) => {
        fetch('http://localhost:3333/api/data')
            .then(res => res.json)
            .then(json => dispatch(receiveData(json)));
        // .catch(err => dispatch(failedRequest(err)) )
    };
};
