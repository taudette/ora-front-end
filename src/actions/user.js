import axios from 'axios'

const parseUser = (userData) => {
    const {included} = userData
    const sessionId = included[0].attributes.username
    return sessionId
}

const receiveData = (data) => {
    return {
        type: 'SET_SESSION_ID',
        data: parseUser(data)
    }
}

export const fetchUser = (url, headers) => {
    console.log('fetch')
    return (dispatch) => {
        return axios({
            method: 'POST',
            url: url,
            timeout: 20000,
            headers: headers
        })
            .then((response) => {
                console.log(response.headers)
                dispatch(receiveData(response.data))
            })
            .catch((response) => {
                console.warn(response.data)
            })
    }
}

