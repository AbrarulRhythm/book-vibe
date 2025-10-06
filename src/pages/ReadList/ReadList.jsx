import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishListBook } from '../../utility/addToDB';
import Book from '../Book/Book';
import SingleReadList from '../SingleReadList/SingleReadList';
import { FaAngleDown } from 'react-icons/fa';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const storedWishListBook = getWishListBook();

        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const convertedWishListStoredBook = storedWishListBook.map(id => parseInt(id));

        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        const myWishList = data.filter(wishListBook => convertedWishListStoredBook.includes(wishListBook.bookId));

        setReadList(myReadList);
        setWishList(myWishList);
    }, [data]);

    const handleSort = (type) => {
        setSort(type)

        if (type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            const wishListSortedByPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);

            setReadList(sortedByPage);
            setWishList(wishListSortedByPage);
        }

        if (type === 'ratings') {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
            const wishListSortedByRatings = [...wishList].sort((a, b) => a.rating - b.rating);

            setReadList(sortedByRatings);
            setWishList(wishListSortedByRatings);
        }
    }

    return (
        <section className='read-list'>
            <div className='container'>
                <div className='dropdown my-11'>
                    <div tabIndex={0} role='button' className='bg-[#23BE0A] text-white py-4 px-6 rounded-lg font-semibold flex items-center cursor-pointer hover:bg-[#16a800] duration-300'>Sort By : {sort ? sort : ''} <FaAngleDown className='ml-1 text-xl' /></div>
                    <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
                        <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
                    </ul>
                </div>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex flex-wrap -mx-3 mt-8 mb-8'>
                            {
                                readList.map((book) => {
                                    return (
                                        <SingleReadList key={book.bookId} book={book}></SingleReadList>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-wrap -mx-3 mt-8 mb-8'>
                            {
                                wishList.map((book) => {
                                    return (
                                        <SingleReadList key={book.bookId} book={book}></SingleReadList>
                                    )
                                })
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default ReadList;