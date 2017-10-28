import axios from 'axios'
import { API_MAP, chatheaders } from '../apiMap'
import moment from 'moment'

//initial message load
const parseMessage = (message) => {
    const {data, included} = message
    const time = data[0].attributes.created_at
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
let currentTime = moment().format('MMM D, h:mmpp');

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
            "userName": 'test'
   
    }   
}

const showMessage = (data) => {
    console.log(data)
    return {
        type: 'LOAD_MESSAGES',
        data: data
    }
}

export const postMessage = (messageText) => {
    return (dispatch) => {
        dispatch(showMessage(stateMessage(messageText.message)))
        // return axios({
        //     method: 'POST',
        //     url: API_MAP.postMessage,
        //     timeout: 20000,
        //     data: JSONMessage(message),
        //     headers: chatheaders
        // })
        //     .then((response) => {
        //         console.log(response.data)
        //         dispatch(receiveData(response.data))
        //     })
        //     .catch((response) => {
        //         console.warn(response.data)
        //     })
    }
}

