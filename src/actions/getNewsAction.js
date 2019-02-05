export const getNews = () => {
    return (dispatch) => {
    
        fetch('https://a2.wykop.pl/Links/Promoted/1/appkey/poow9X4hli')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'NEWS_LIST', data});
            })
            .catch(error => {
                dispatch({ type: 'NEWS_LIST_ERROR', error});
            })
    }
}
        