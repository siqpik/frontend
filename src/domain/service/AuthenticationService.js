import base64 from 'react-native-base64'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'USER_NAME_SESSION_ATTRIBUTE_NAME';

export const executeBasicAuthenticationService = (userName, pass) => axios.get('https://siqpik.herokuapp.com/basicauth', {
    headers: { authorization: createBasicAuthToken(userName, pass) }
})
    .then(response => {
        if (response.status !== 200) throw new Error("No se pudo auth: " + response.status)
        registerSuccessfulLogin(userName, pass)
    })

const createBasicAuthToken = (username, password) => 'Basic ' + base64.encode(username + ":" + password)

export const registerSuccessfulLogin = (username, password) => {
    AsyncStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    setupAxiosInterceptors(createBasicAuthToken(username, password))
}

const setupAxiosInterceptors = token => {
    axios.interceptors.request.use(
        config => {
            if (isUserLoggedIn()) {
                config.headers.authorization = token
            }
            return config
        }
    )
}

const isUserLoggedIn = () => AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) !== null
