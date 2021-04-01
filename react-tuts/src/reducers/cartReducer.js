import actionType from '../actions/actionType'
const initState = [{
    id:1,
    title:'苹果',
    price:12.44,
    num:23
},{
    id:2,
    title:'橘子',
    price:16.44,
    num:83
}]  


export default (state = initState,action) => {
     switch(action.type){
         case actionType.CART_AMOUNT_INCREMENT:
             return state.map(item =>{
                 if(item.id === action.payload.id){
                     item.num += 1
                 }
                 return item
             })
         case actionType.CART_AMOUNT_DECREMENT:
            return state.map(item =>{
                if(item.id === action.payload.id){
                    item.num -= 1
                }
                return item
            })
         default:
             return state
     }
}