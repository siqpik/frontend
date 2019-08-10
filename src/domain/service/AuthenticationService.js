import base64 from 'react-native-base64'

export const executeBasicAuthenticationService = (userName, pass) => {
    return fetch(`https://aqueous-castle-34128.herokuapp.com/basicauth`,{
        headers: {
            authorization: createBasicAuthToken(userName, pass)
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo auth: " + response.status)
            }

            alert("Parece que todo bien: " + response.status)
        })
        .catch(error => alert(error))
}

const createBasicAuthToken = (username, password) => 'Basic ' + base64.encode(username + ":" + password)