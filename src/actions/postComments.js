export function postComments(comment){
    return (dispatch) => {
        fetch('https://still-refuge-44546.herokuapp.com/comments', {
            // fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then(comment => dispatch({ 
            type: 'ADD_COMMENT', 
            payload: comment
        }))
    }
}   