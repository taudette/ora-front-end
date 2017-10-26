import axios from 'axios'

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

export const fetchUser = (url, headers) => {
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


var request = new XMLHttpRequest();

request.open('POST', 'https://private-anon-c3d910f372-orachallenge.apiary-mock.com/api/v1/sessions');

request.setRequestHeader('Content-Type', 'application/vnd.api+json');
request.setRequestHeader('Accept', 'application/vnd.api+json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = "{ \
  'data': { \
    'type': 'sessions' \
  } \
}";

request.send(body);
