import axios from 'axios'
import { API_MAP, chatheaders } from '../apiMap'

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

export const fetchMessages = (url, headers) => {
    return (dispatch) => {
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
                console.warn(response.data)
            })
    }
}

const message = {
  "data": {
    "type": "messages",
    "attributes": {
      "message": "You gotta go with option 2",
      "userID": "user12344"
    }
  }
}

export const postMessage = (message) => {
    console.log(message)
    return (dispatch) => {
        return axios({
            method: 'POST',
            url: API_MAP.postMessage,
            timeout: 20000,
            data: message,
            headers: chatheaders
        })
            .then((response) => {
                console.log(response.data)
                dispatch(receiveData(response.data))
            })
            .catch((response) => {
                console.warn(response.data)
            })
    }
}

