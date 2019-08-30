

export const groupAddedItemToCart = (arrItems, newItem) => {
    let isDuplicate = false;

    let newArrItems = arrItems.map( item => {
        if ( item.id === newItem.id) {
            isDuplicate = true;
           return {...item, quantity: item.quantity + 1 }
        } else {
            return item; }
    });

    if (isDuplicate) {
        return newArrItems;
    } else {
        newArrItems.push( {...newItem, quantity: 1 } );
        return newArrItems;
    }
};

export const clearRemovedItemFromCart = (arrItems, removingItem) => {
    let indxRemovingItem;

    let newArrItems = arrItems.map( (item, indx) => {
        if (item.id === removingItem.id) {
            indxRemovingItem = indx;
            return {...item, quantity: item.quantity - 1 }
        } else {
            return item }
    }   );

    if (removingItem.quantity === 1) {
        newArrItems.splice(indxRemovingItem, 1);
        return newArrItems
    } else {
       return newArrItems;
    }
};

export const clearItemFromCart = (arrItems, clearingItem) => {
   return arrItems.filter( item => item.id !== clearingItem.id)
};


export const countCartItems = arrItems => {
    return arrItems.reduce( (accum, item)=> accum += item.quantity , 0);
};

export const countTotalPrice = arrItems => {
    return arrItems.reduce( (accum, item)=> accum += (item.quantity * item.price) , 0);
};