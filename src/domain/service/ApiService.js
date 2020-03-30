import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_SESSION} from './AuthenticationService';

//const HOST_URL = 'http://172.30.0.139:8080';
export const HOST_URL = 'https://siqpik.herokuapp.com';
export const API_URL = HOST_URL + '/api';

export const post = (url, body, contentType) => authenticatedRequest(url, 'POST', body, contentType);

export const getJson = url => authenticatedRequest(url, 'GET')
    .then(response => response.json());

export const authenticatedRequest = (url, method, body, contentType) => AsyncStorage.getItem(TOKEN_SESSION)
    .then(token => genericFetch(url, method,
        {
        'Authorization': 'Bearer ' + token,
        'Content-Type': contentType != null ? contentType : 'application/json'
        },
        body
        ))

export const genericFetch = (url, method, headers, body) => fetch(API_URL + url, {
    method: method,
    headers: headers,
    body: body
}).then(response => handleErrors(response))

function handleErrors(response) {
    if (!response.ok) {
        alert("Something went wrong: " + JSON.stringify(response))
        throw Error(response.status);
    }
    return response;
}
