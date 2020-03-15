import AsyncStorage from '@react-native-community/async-storage'
import AuthenticationRequest from "../model/AuthenticationRequest"

//const HOST_URL = 'http://172.30.0.139:8080';
const HOST_URL = 'https://siqpik.herokuapp.com';
const API_URL = HOST_URL + '/api';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'USER_NAME_SESSION_ATTRIBUTE_NAME';
export const TOKEN_SESSION = 'TOKEN_SESSION_ATTRIBUTE_NAME';

export const authenticate = (username, password) => fetch(HOST_URL + '/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(new AuthenticationRequest(username, password))
}).then(response => {
    if (response.status === 403){
        console.log(response);
       // throw new Error("Credenciales inválidas"();
    }

    return response.json()
}).then(json => registerSuccessfulLogin(json.jwt, username))

export const registerSuccessfulLogin = (token, username) => {
    AsyncStorage.setItem(TOKEN_SESSION, token)
    AsyncStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
}

export const getJson = url => authenticatedRequest(url, 'GET')
    .then(response => response.json())

export const post = (url, body, contentType) => authenticatedRequest(url, 'POST', body, contentType)

const authenticatedRequest = (url, method, body, contentType) => AsyncStorage.getItem(TOKEN_SESSION)
    .then(token => genericFetch(url, method, {
        'Authorization': 'Bearer ' + token,
        'Content-Type': contentType != null ? contentType : 'application/json'
        },
        body
    )
)

const genericFetch = (url, method, headers, body) => fetch(API_URL + url, {
    method: method,
    headers: headers,
    body: body
})
