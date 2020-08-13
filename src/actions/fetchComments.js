export function fetchComments(){
    return (dispatch) => {
        fetch('https://still-refuge-44546.herokuapp.com/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({ 
            type: 'FETCH_COMMENTS', 
            payload: comments
        }))
    }
}   