const toggleTemp = (state=false, action) =>{
    switch(action.type) {
        case "toggleTemp":
            return !state
        default:
            return state
    }
}

export default toggleTemp