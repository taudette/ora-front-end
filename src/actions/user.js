import axios from 'axios'

const requestData = () => {
    return {type: 'REQUEST_DATA'}
}

const parseUser = (userData) => {
    const {included} = userData
    const sessionId = included[0].attributes.username
    console.log(sessionId)
    return sessionId
}

const receiveData = (data) => {
    return {
        type: 'SET_SESSION_ID',
        data: parseUser(data)
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
            method: 'POST',
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