import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    return (
        <div className='book-details mb-20'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 lg:-mx-6'>
                    <div className='w-full lg:w-6/12 px-3 lg:px-6 mb-6 lg:mb-0'>
                        <div className='bg-[#F3F3F3] rounded-2xl p-20 h-full flex justify-center items-center'>
                            <img className='max-h-[564px]' src={image} alt='Book Image' />
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-3 lg:px-6'>
                        <h1 className='text-[32px] md:text-[40px] font-bold font-PlayfairDisplay mb-2'>{bookName}</h1>
                        <h5 className='text-lg font-medium text-gray-500'>By: {author}</h5>
                        <h5 className='text-lg font-medium text-gray-500 my-6 py-4 border-t border-b border-gray-100'>{category}</h5>
                        <p className='text-gray-500'><strong className='text-gray-900'>Review :</strong> {review}</p>
                        <div className='my-6'>
                            <strong className='text-gray-900 mr-4'>Tag</strong>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <span key={index} className='bg-[#F0FFEE] text-[#23BE0A] text-base font-medium py-[7px] px-4 rounded-4xl mr-3'>{tag}</span>
                                    )
                                })
                            }
                        </div>
                        <hr className='border-0 border-b border-gray-100' />
                        <div className='mt-6 mb-8 max-w-[464px]'>
                            <div className='flex justify-between mb-3'>
                                <span>Number of Pages:</span>
                                <strong className='w-[200px]'>{totalPages}</strong>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <span>Publisher:</span>
                                <strong className='w-[200px]'>{publisher}</strong>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <span>Year of Publishing:</span>
                                <strong className='w-[200px]'>{yearOfPublishing}</strong>
                            </div>
                            <div className='flex justify-between'>
                                <span>Rating:</span>
                                <strong className='w-[200px]'>{rating}</strong>
                            </div>
                        </div>
                        <div>
                            <button className='text-base font-medium py-4 px-8 border border-gray-300 rounded-lg cursor-pointer '>Read</button>
                            <button className='text-base font-medium py-4 px-8 bg-sky-500 text-white rounded-lg cursor-pointer hover:bg-sky-600 duration-300 ml-4'>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;