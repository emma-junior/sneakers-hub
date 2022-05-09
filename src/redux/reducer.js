import initialState from "../productsArray"


const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_TO_CART':
            //add item to cart
            const item = state.product.find(prod => prod.id === action.payload.id)
            //if item is in cart
            const inCart = state.cart.find(item => item.id === action.payload.id ? true:false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty +1} : item) : [...state.cart, {...item, qty: 1}]
            }
        case 'REMOVE_FROM_CART':
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case 'ADJUST_QTY':
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: +action.payload.qty }
                  : item
              ),
            };
        case 'LOAD_CURRENT_ITEM':
            return {
                ...state,
                currentItem: action.payload
            }
        case 'REMOVE_ALL_ITEM':
            return {
                ...state,
                cart: []
            }
        default:
            return state

    }
}
export default reducer