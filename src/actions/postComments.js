export function postComments(comment){
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
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