export const getSpecificNews = (id) => {
    return (dispatch) => {
    
        fetch(`https://a2.wykop.pl/Links/Link/${id}/withcomments/true/appkey/poow9X4hli`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SPECIFIC_NEWS', data});
            })
            .catch(error => {
                dispatch({ type: 'SPECIFIC_NEWS_ERROR', error});
            })
    }
}

export const getRelatedSpecificNews = (id) => {
    return (dispatch) => {
    
        fetch(`https://a2.wykop.pl/Links/Related/${id}/appkey/poow9X4hli`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'RELATED_SPECIFIC_NEWS', data});
            })
            .catch(error => {
                dispatch({ type: 'RELATED_SPECIFIC_NEWS_ERROR', error});
            })
    }
}
        