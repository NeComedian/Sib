export const selectVideos= (state) => {
    return state.resultPage.videos
}

export const selectCurrentPage= (state) => {
    return state.resultPage.currentPage
}

export const selectSearchTitle= (state) => {
    return state.resultPage.searchTitle
}

export const selectResultsCount= (state) => {
    return state.resultPage.resultsCount
}