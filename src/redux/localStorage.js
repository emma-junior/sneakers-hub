import initialState from "../productsArray"

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('theCart');
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = () => {
    try {
        const serializedState = JSON.stringify(initialState.cart)
        localStorage.setItem('theCart', serializedState);
    } catch (err){
        console.error();
    }
}

