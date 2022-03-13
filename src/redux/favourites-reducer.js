const DELETE_QUERY = 'favourites/delete_query';
const ADD_QUERY = 'favourites/add_query'
const EDIT_QUERY = 'favourites/edit_query'
const SET_EDITING_QUERY = "favourites/set_editing_query"

let initialState = {
    editingId: 1,
    queries:[{title: "telegramQuery12", maxResults: 12, query: "telegramm", id: 1},
        {title: "zooQuery10", maxResults: 10, query: "zoo", id: 2},
        {title: "хлебQuery2", maxResults: 2, query: "хлеб", id: 3}],
}

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_QUERY:
            return{
                ...state,
                queries: state.queries.filter(query => query.id !== action.id)
            }

        case ADD_QUERY:
            return{
                ...state,
                queries: [...state.queries, action.query]
            }
        case SET_EDITING_QUERY:
            return{
                ...state,
                editingId: action.id
            }
        case EDIT_QUERY:
            return {
                ...state,
                queries: [...state.queries.filter(query => query.id!=action.query.id), action.query]
            }
        default:
            return state
    }
}

export const deleteQuery = (id) => ({type: DELETE_QUERY , id: id})
export const editQuery = (query) => ({type: EDIT_QUERY , query: query})
export const addQuery = (query) => ({type: ADD_QUERY , query: query})
export const setEditingId = (id) => ({type: SET_EDITING_QUERY , id:id})