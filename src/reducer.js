export const initialState ={
    basket :[],
    user :null
};

//Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state , action) => {
    switch(action.type)
    {
        case 'ADD_TO_BASKET':


                    const existingItemIndex= state.basket.findIndex((item) => item.id ===action.item.id);
                    const existingItem = state.basket[existingItemIndex]

                    let updatedItems;
                    if(existingItem)
                    {

                        const updatedItem ={
                            ...existingItem,
                            price: existingItem.price + (existingItem.price/existingItem.quantity),
                            quantity: existingItem.quantity+1
                        }

                        updatedItems=[...state.basket]
                        updatedItems[existingItemIndex] = updatedItem

                    }

                    else{
                        updatedItems = state.basket.concat(action.item)
                    }
                    return {
                        ...state,
                        basket : updatedItems,
                    };


        case 'CLEAR_ITEM_FROM_BASKET':
                const index = state.basket.findIndex((basketitem) => basketitem.id === action.id);
                let newbasket =[...state.basket];
                if(index>=0)
                {
                    newbasket.splice(index,1);
                }
                else{
                    console.warn(`Cant remove product (id: ${action.id} as its not in basket!`)
                }
                return {
                    ...state,
                    basket : newbasket
                };

         case 'REMOVE_FROM_BASKET':

    
                const existingitemIndex= state.basket.findIndex((item) => item.id ===action.item.id);
                const existingitem = state.basket[existingitemIndex]
    
                let updateditems;
                if(existingitem.quantity===1)
                {
                    updateditems = state.basket.filter((item) => item.id!==action.item.id)
                }
                else
                {
                    const updateditem = {
                        ...existingitem ,
                        quantity: existingitem.quantity-1,
                        price: existingitem.price - (existingitem.price/existingitem.quantity)
                    }

                    updateditems=[...state.basket]
                    updateditems[existingitemIndex] = updateditem
                }
    
                return {
                    ...state,
                    basket : updateditems
                }

        case "EMPTY_BASKET":
             return {
                    ...state,
                    basket:[]
                }    



        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }  
        default : 
                return {
                    ...state
                }
    }
};

export default reducer;
