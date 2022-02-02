
let initialState ={
    friends: [
        {name: 'Roni', id: 1},
        {name: 'Mik', id: 2},
        {name: 'Pop', id: 3}
    ]
}

const friendsReducer =(state=initialState, action)=>{
    return state
}

export default friendsReducer;