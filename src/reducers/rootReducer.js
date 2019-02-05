const initState = {

}
const rootReducer = (state = initState, action) => {
    if (action.type === 'NEWS_LIST'){
        console.log('NEWS_LIST loaded', action.data)    
        //state.newsList = action.data.data;
        return {
            ...state,
            newsList: action.data.data
        };
    } else if (action.type === 'NEWS_LIST_ERROR') {
        console.log('FETCH_DATA_ERROR',action.error)
        return state;
    } else if (action.type === 'SPECIFIC_NEWS') {
        console.log('SPECIFIC_NEWS loaded', action.data)
        return {
            ...state,
            newsItem: action.data.data
        };
    } else if (action.type === 'SPECIFIC_NEWS_ERROR') {
        console.log('FETCH_DATA_ERROR', action.error)
        return state;
    } else {
        return state
    }
}

export default rootReducer;