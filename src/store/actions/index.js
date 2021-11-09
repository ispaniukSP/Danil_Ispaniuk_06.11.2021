export const changeTemp = (temp) => {
    return{
        type: "toggleTemp",
        payload: !temp
    }
}