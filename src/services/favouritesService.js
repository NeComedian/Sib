export const setLocalToken = (token) =>{
    localStorage.setItem('authed-token', token);
}

export const deleteLocalToken = (token) =>{
    localStorage.removeItem('authed-token');
}

export const getLocalToken = () => {
    return localStorage.getItem('authed-token');
}
