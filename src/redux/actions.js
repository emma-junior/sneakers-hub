export const addToCart = (itemID) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: "ADJUST_QTY",
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: "LOAD_CURRENT_ITEM",
        payload: item
    }
}

export const removeAllItem = () => {
    return {
        type: "REMOVE_ALL_ITEM"
    }
}