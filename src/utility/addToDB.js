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

export { addToStoredDB, getStoredBook };