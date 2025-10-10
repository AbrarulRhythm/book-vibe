import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { RiGroupLine } from 'react-icons/ri';
import { Link } from 'react-router';

const SingleReadList = ({ book }) => {
    return (
        <div className='w-fill md:w-full px-3 mb-6'>
            <div className='p-6 rounded-2xl border border-gray-100'>
                <div className='flex flex-wrap -mx-3 items-center'>
                    <div className='w-full lg:w-3/12 px-3 mb-6 lg:mb-0'>
                        <div className='bg-[#F3F3F3] rounded-2xl py-8'>
                            <img className='h-[172px] mx-auto' src={book.image} alt="" />
                        </div>
                    </div>
                    <div className='w-full lg:w-9/12 px-3'>
                        <h1 className='font-PlayfairDisplay text-2xl font-bold mb-3'>{book.bookName}</h1>
                        <h5 className='font-medium text-base text-gray-500 mb-6'>By : {book.author}</h5>
                        <div className='mb-6 flex flex-col md:flex-row items-start lg:items-center'>
                            <div className='flex items-start flex-col md:flex-row md:items-center'>
                                <div className='mb-4 md:mb-0 mt-2'>
                                    <strong className='mr-3 mb-2 lg:mb-0'>Tag</strong>
                                    {
                                        book.tags.map((tag, index) => {
                                            return (
                                                <span key={index} className='bg-[#F0FFEE] text-[#23BE0A] text-base font-medium py-[7px] px-4 rounded-4xl mr-3'>#{tag}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className='font-medium text-base text-gray-500 flex items-center ml-0 md:ml-2'><LuMapPin className='text-lg mr-2' /> Year of Publishing: {book.yearOfPublishing}</div>
                            </div>
                        </div>
                        <div className='font-medium text-base text-gray-500 flex items-start md:items-center flex-col md:flex-row'>
                            <div className='flex items-center mr-4 mb-4 md:mb-0'><RiGroupLine className='text-xl mr-3' /> Publisher: {book.publisher}</div>
                            <div className='flex items-center'><FaRegFileAlt className='text-xl mr-3' /> Page {book.totalPages}</div>
                        </div>
                        <hr className='border-0 border-t border-gray-100 mt-4 mb-6' />
                        <div className='flex items-start md:items-center flex-col md:flex-row'>
                            <span className='bg-[#E0EEFF] text-[#328EFF] py-2.5 px-5 rounded-4xl mr-4 mb-3 md:mb-0'>Category: {book.category}</span>
                            <span className='bg-[#FFF1DD] text-[#FFAC33] py-2.5 px-5 rounded-4xl mr-4 mb-5 md:mb-0'>Rating: {book.rating}</span>
                            <Link to={`/bookDetails/${book.bookId}`}>
                                <span className='bg-[#23BE0A] text-white py-2.5 px-5 rounded-4xl cursor-pointer hover:bg-[#16a800] duration-300'>View Details</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReadList;