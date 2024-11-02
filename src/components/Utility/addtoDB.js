const getStorReadList =()=>{
    const storedListString = localStorage.getItem('read-list');
    if(storedListString){
        const storedList = JSON.parse(storedListString);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStorReadList =(id)=>{
        const storedList = getStorReadList();
        if(storedList.includes(id)){
            console.log(id,'Already Exist')
        }
        else{
            storedList.push(id);
            const storedListString = JSON.stringify(storedList);
            localStorage.setItem('read-list', storedListString);
        }
}

const getStorWishList =()=>{
    const storedWishListString = localStorage.getItem('wish-list');
    if(storedWishListString){
        const storedWishList = JSON.parse(storedWishListString);
        return storedWishList;
    }
    else{
        return [];
    }
}


const addToStorWishList =(id)=>{
        const storedWishList = getStorWishList();
        if(storedWishList.includes(id)){
            console.log(id,'Already Exist')
        }
        else{
            storedWishList.push(id);
            const storedWishListString = JSON.stringify(storedWishList);
            localStorage.setItem('wish-list', storedWishListString);
        }
}

export {addToStorReadList, addToStorWishList,getStorReadList }