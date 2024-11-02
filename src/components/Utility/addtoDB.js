import { toast } from "react-toastify";

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


const addToStorReadList = (id) => {
    const storedList = getStorReadList();
    if (storedList.includes(id)) {
        // Show a warning toast if the book is already in the list
        toast.warning('Book is already in the read list!');
    } else {
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
        // Show a success toast when the book is added
        toast.success('Book added to the read list!');
    }
};


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