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

//data being sent to api
const parseBody = (data, user) => {
    return {
        "data": {
            "type": "messages",
            "attributes": {
                "message": data.message,
                "userID": user,
                "time" : currentTime
            }
        }
    }    
}

//data being sent to state
const stateMessage = (data, user) => {
    return {   
        "time": currentTime,
        "messageText": data.message,
        "userName": user
    }   
}

const showMessage = (data) => {
    return {
        type: 'LOAD_MESSAGES',
        data: data
    }
}

//parse data recieved from api and set to state
const parseResponse = (response) => {
    const rawTime = response.data.attributes.created_at
    var time = moment(rawTime).format('MMM D, h:mma')
    const messageText = response.data.attributes.message
    const userId = response.included[0].attributes.username
    return {   
        "time": time,
        "messageText": messageText,
        "userName": userId
    }  
}

export const postMessage = (data, user) => {
    console.log(data, user)
    return (dispatch) => {
        dispatch(showMessage(stateMessage(data, user)))
        return axios({
            method: 'POST',
            url: API_MAP.postMessage,
            timeout: 20000,
            data: parseBody(data, user),
            headers: chatheaders
        })
            .then((response) => {
                dispatch(showMessage(parseResponse(response.data)))
            })
            .catch((response) => {
                console.warn(response.data)
            })
    }
}

