export const initialState = {
    articles: [],
    savedArticles: [],
    activeTrends: []
}

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "init_stored": {
            return action.value
         }

        case "add_article":
            return {
                ...state,
                savedArticles: [...state.savedArticles, action.value]
            }
        case "remove_article":
            return {
                ...state,
                savedArticles: state["savedArticles"].filter(a => a.url !== action.value)}
            }    
}