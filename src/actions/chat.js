import axios from 'axios'

const requestData = () => {
    return {type: 'REQUEST_DATA'}
}

const parseMessage = (message) => {
    const {data, included} = message
    const time = data[0].attributes.created_at
    const messageText = data[0].attributes.message
    const userName = included[0].attributes.username
    return { time, messageText, userName}
}

const receiveData = (data) => {
    return {
        type: 'LOAD_MESSAGES',
        data: parseMessage(data)
    }
}

const recieveError = (data) => {
    return {
        type: 'RECIEVE_ERROR',
        data: data
    }
} 

export const fetchMessages = (url, headers) => {
    console.log(url)
    return (dispatch) => {
        dispatch(requestData())
        return axios({
            method: 'GET',
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