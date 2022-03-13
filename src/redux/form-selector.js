
export const selectResultSearchValue = (state) => {
    if(state.form.ResultSearch)
        return state.form.ResultSearch.values.resultSearch;
    else
        return null
}
