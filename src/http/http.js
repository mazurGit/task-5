import { storageGetToken } from "../helpers/localStorage";
export const http = () => {

    const request = async ({
        url,
        method = 'GET',
        body = null,
    }) => {
        const headers = method === 'DELETE'
            ? {
                'Authorization': storageGetToken()
                    ? `Bearer ${ storageGetToken()}`
                    : null,
                'Accept': '*/*'
            }
            :{
                'Content-Type': 'application/json',
                'Authorization': storageGetToken()
                    ? `Bearer ${ storageGetToken()}`
                    : null,
                'Accept': 'application/json'
            }
        try {
            const response = await fetch(url, {
                method,
                body:body
                    ? JSON.stringify(body)
                    : null ,
                headers
                });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = method === 'DELETE'
                ? ''
                : await response.json()

            return data;
        } catch(e) {
            throw e;
        }
    };


    return { request }
}