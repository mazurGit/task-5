export const storageSetToken = (token) =>{
    localStorage.setItem('token', token)
}

export const storageGetToken = () => {
    return localStorage.getItem('token')
}

export const storageRemoveToken = () =>{
    return localStorage.removeItem('token');
}
