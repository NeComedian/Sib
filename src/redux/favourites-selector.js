export const selectQueries = (state) => {
    return state.favouritesPage.queries
}


export const selectEditingId = (state) => {
    return state.favouritesPage.editingId
}

export const selectQueryById = (id) => {
    return (state) => {
        return state.favouritesPage.queries.find(query => query.id == id)
    }
}