import axios from 'axios'
import { API_MAP, chatheaders } from '../apiMap'
import moment from 'moment'

//initial messages load
const parseMessage = (message) => {
    const {data, included} = message
    const rawTime = data[0].attributes.created_at
    var time = moment(rawTime).format('MMM D, h:mma')
    const messageText = data[0].attributes.message
    const userName = included[0].attributes.username
    return { time, messageText, userName}
}

const recieveMessages = (data) => {
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
                dispatch(recieveMessages(response.data))
            })
            .catch((response) => {
                console.warn(response.data)
            })
    }
}

// posting new message to chat
let currentTime = moment().format('MMM D, h:mma');

const JSONMessage = (message) => {
    return {
        "data": {
            "type": "messages",
            "attributes": {
                "message": message,
                "userID": 'userId',
                "time" : currentTime
            }
        }
    }    
}

const stateMessage = (messageText) => {
    return {   
        "time": currentTime,
        "messageText": messageText,
        "userName": 'username here'
    }   
}

const showMessage = (data) => {
    return {
        type: 'LOAD_MESSAGES',
        data: data
    }
}

const showMessage2 = (data) => {
    return {
        type: 'LOAD_MESSAGES',
        data: data
    }
}

const parseResponse = (response) => {
    const time = response.data.attributes.created_at
    const messageText = response.data.attributes.message
    const userId = response.included[0].attributes.username
    return {   
        "time": time,
        "messageText": messageText,
        "userName": userId
    }  
}

export const postMessage = ({message} = message) => {
    return (dispatch) => {
        dispatch(showMessage(stateMessage(message)))
        return axios({
            method: 'POST',
            url: API_MAP.postMessage,
            timeout: 20000,
            data: JSONMessage(message),
            headers: chatheaders
        })
            .then((response) => {
                dispatch(showMessage2(parseResponse(response.data)))
            })
            .catch((response) => {
                console.warn(response.data)
            })
    }
}

