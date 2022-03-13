export const selectIsLogged= (state) => {
    return state.auth.isLogged
}

export const selectToken= (state) => {
    return state.auth.token
}

