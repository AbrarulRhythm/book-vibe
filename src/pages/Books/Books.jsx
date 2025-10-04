import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // const [AllBooks, setAllBooks] = useState([]);

    return (
        <section>
            <div className='container'>
                {/* Section Title */}
                <h1 className='font-PlayfairDisplay text-[40px] font-bold mt-20 mb-10 text-center'>Books</h1>
                <div className='flex flex-wrap -mx-3 mb-10'>
                    {
                        data.map((book) => {
                            return (
                                <Book key={book.bookId} book={book}></Book>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Books;