import axios from 'axios'

const requestData = () => {
    return {type: 'REQUEST_DATA'}
}

const receiveData = (data) => {
    console.log('user: ', data)
    return {
        type: 'RECIEVE_DATA',
        data: data
    }
}

const recieveError = (data) => {
    return {
        type: 'RECIEVE_ERROR',
        data: data
    }
} 

export const fetchUser = (url, headers) => {
    return (dispatch) => {
        dispatch(requestData())
        return axios({
            method: 'post',
            url: url,
            timeout: 20000,
            headers: headers
        })
            .then((response) => {
                dispatch(receiveData(response.data))
            })
            .catch((response) => {
                dispatch(recieveError(response.data))
            })
    }
}