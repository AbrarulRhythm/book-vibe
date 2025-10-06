import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem('readList');

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}

const getWishListBook = () => {

    const wishListBook = localStorage.getItem('wishList');

    if (wishListBook) {
        const wishListBookSTR = JSON.parse(wishListBook);
        return wishListBookSTR;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        // Error Message
        MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Book is already added",
        });
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
        toast('Added to Read List.');
    }
}

const addToWishList = (id) => {

    const storedWishListData = getWishListBook();

    if (storedWishListData.includes(id)) {
        // Error Message
        MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Book is already added",
        });
    }
    else {
        storedWishListData.push(id);
        const data = JSON.stringify(storedWishListData)
        localStorage.setItem('wishList', data);
        toast('Added to Wish List.');
    }
}

export { addToStoredDB, getStoredBook, addToWishList, getWishListBook };