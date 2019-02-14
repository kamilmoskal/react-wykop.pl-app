export const getPostList = () => {
    return (dispatch) => {
    
        fetch(`https://a2.wykop.pl/Entries/Hot/page/1/period/12/appkey/poow9X4hli`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'POST_LIST', data});
            })
            .catch(error => {
                dispatch({ type: 'POST_LIST_ERROR', error});
            })
    }
}
        