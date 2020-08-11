export function fetchComments(){
    return (dispatch) => {
        fetch('http://localhost:3000/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({ 
            type: 'FETCH_COMMENTS', 
            payload: comments
        }))
    }
}   