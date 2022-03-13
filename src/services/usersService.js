const data = {
    "usersCount": 2,
    "users": [
        {
            "login": "user",
            "password": "user",
            "token": "user-user"
        },
        {
            "login": "anotherUser",
            "password": "anotherUser",
            "token": "anotherUser-anotherUser"
        }
    ]
}

export const login = (login, password) =>{
    const currentUser = data.users.filter(user => (user.login === login && user.password === password ));
    if(currentUser.length) return [true, currentUser[0].token]
    else return [false, "Wrong login or password"]
}

export const isValidToken = (token) =>{
    const currentUser = data.users.filter(user => (user.token === token ));
    return !!(currentUser.length)
}