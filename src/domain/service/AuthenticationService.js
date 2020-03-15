import AsyncStorage from '@react-native-community/async-storage';
import AuthenticationRequest from '../model/AuthenticationRequest';
import {API_URL, authenticatedRequest, HOST_URL} from './ApiService';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'USER_NAME_SESSION_ATTRIBUTE_NAME';
export const TOKEN_SESSION = 'TOKEN_SESSION_ATTRIBUTE_NAME';

const AUTH_URL = HOST_URL + '/authenticate';

export const authenticate = (username, password) => fetch(AUTH_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(new AuthenticationRequest(username, password))
}).then(response => {
    if (!response.ok){
       throw new Error("Error trying to athenticate: " + response);
    }

    return response.json()
}).then(json => registerSuccessfulLogin(json.jwt, username))

export const registerSuccessfulLogin = (token, username) => {
    AsyncStorage.setItem(TOKEN_SESSION, token)
    AsyncStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
}

export const logout = () => authenticatedRequest('/logout', 'GET')
        .then(response => {
            if (!response.ok){
                alert(JSON.stringify(response))
            } else {
                AsyncStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                AsyncStorage.removeItem(TOKEN_SESSION)
            }
        })
