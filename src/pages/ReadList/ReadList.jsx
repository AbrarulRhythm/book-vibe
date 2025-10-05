import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
import SingleReadList from '../SingleReadList/SingleReadList';

const ReadList = () => {

    const [readList, setReadList] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, []);

    return (
        <section className='read-list'>
            <div className='container'>
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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default ReadList;