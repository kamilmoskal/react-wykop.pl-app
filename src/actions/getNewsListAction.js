export const getNewsList = (which) => {
    return (dispatch) => {
    
        fetch(`https://a2.wykop.pl/${which}/appkey/poow9X4hli`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'NEWS_LIST', data});
            })
            .catch(error => {
                dispatch({ type: 'NEWS_LIST_ERROR', error});
            })
    }
}
        