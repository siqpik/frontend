import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_SESSION} from "../shared/Consts";

//const API_URL = 'http://172.30.0.139:8080';
export const API_URL = 'https://siqpik-dev.herokuapp.com';

export const post = (url, body, contentType) => {
  return authenticatedRequest(url,
      'POST', body, contentType);
}

export const uploadMedia = media =>
    AsyncStorage.getItem(TOKEN_SESSION)
    .then(jwt => fetch(API_URL + '/post/', {
          method: 'POST',
          body: media,
          headers: {
            'Authorization': 'Bearer ' + jwt
          }
        })
    ).then(response => {
      return handleErrors(response)
    })

export const deleteItem = (url, body, contentType) => authenticatedRequest(url,
    'DELETE', body, contentType);

export const getJson = url => authenticatedRequest(url, 'GET')
.then(response => response.json());

export const authenticatedRequest = (url, method, body,
    contentType) => AsyncStorage.getItem(TOKEN_SESSION)
.then(token => {
  return genericFetch(url, method,
      {
        'Authorization': 'Bearer ' + token,
        'Content-Type': contentType || 'application/json'
      },
      body
  )
})

export const genericPost = (url, body) =>
    genericFetch(url, 'POST', {'Content-Type': 'application/json'},
        JSON.stringify(body))
    .then(response => response.json())

const genericFetch = (url, method, headers, body) => {

  const fullUrl = API_URL + url

  return fetch(fullUrl, {
    method: method,
    headers: headers,
    body: body
  }).then(response => {
    return handleErrors(response)
  })
}

function handleErrors(response) {
  console.log('response: ', response.status)
  if (!response.ok) {
    console.log("Something went wrong fetching: " + JSON.stringify(response))
    throw Error(response.status);
  }
  return response;
}
