import React from 'react';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router';

const Book = ({ book }) => {
    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6 h-full'>
            <Link to={`./bookDetails/${book.bookId}`}>
                <div className='p-6 border border-gray-200 rounded-2xl'>
                    <div className='bg-[#F3F3F3] rounded-2xl mb-6 py-8'>
                        <img className='h-40 mx-auto' src={book.image} alt="Book Image" />
                    </div>
                    <div className='mb-5'>
                        {
                            book.tags.map((tag, index) => {
                                return (
                                    <span key={index} className='bg-[#F0FFEE] text-[#23BE0A] text-base font-medium py-[7px] px-4 rounded-4xl mr-3'>{tag}</span>
                                )
                            })
                        }
                    </div>
                    <h2 className='font-PlayfairDisplay text-2xl font-bold mb-4'>{book.bookName}</h2>
                    <h5 className='text-base font-medium text-gray-600'>By: {book.author}</h5>
                    <hr className='border-0 border-t border-dashed border-gray-200 my-5' />
                    <div className='flex justify-between items-center'>
                        <h5 className='text-base font-medium text-gray-600'>{book.category}</h5>
                        <h5 className='text-base font-medium text-gray-600 flex items-center'>{book.rating} <FiStar className='text-lg ml-2' /></h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;