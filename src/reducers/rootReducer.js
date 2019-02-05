const initState = {

}
const rootReducer = (state = initState, action) => {
    if (action.type === 'NEWS_LIST'){
        //console.log(action.data)    
        return {
            ...state,
            newsList: action.data.data
        };
    } else if (action.type === 'NEWS_LIST_ERROR') {
        console.log(action.error)
        return state;
    } else {
        return state
    }
}

export default rootReducer;