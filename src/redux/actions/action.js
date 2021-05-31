
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const asynceInc = () => dp => {
    setTimeout(() => {
        dp({
            type: "ASYNCE_INCRE"
        })
    }, 1000)
}
