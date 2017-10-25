import axios from 'axios'

const requestData = () => {
    return {type: 'REQUEST_DATA'}
}

const receiveData = (data) => {
    console.log(data)
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

//todo try arrow function
export const fetchData = (url, headers) => {
    console.log(url)
    return function(dispatch) {
        dispatch(requestData())
        return axios({
            url: url,
            timeout: 20000,
            heeaders: headers
        })
            .then(function(response){
                dispatch(receiveData(response.data))
            })
            .catch(function(response){
                dispatch(recieveError(response.data))
            })
    }
}