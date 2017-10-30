import axios from 'axios'
import { capFirst } from '../utils'

// using the user ID instead of JWT token from response header:
// I was unable to get the token from the authorization header:
// error: Refused to get unsafe header "Authorization"
const parseUser = (userData) => {
    const {included} = userData
    const sessionId = capFirst(included[0].attributes.username)
    return sessionId
}

const receiveData = (data) => {
    return {
        type: 'SET_SESSION_ID',
        data: parseUser(data)
    }
}

export const fetchUser = (url, headers) => {
    return (dispatch) => {
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
                console.warn(response.data)
            })
    }
}

