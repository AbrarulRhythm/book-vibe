import React from 'react';
import bannerBook from '../assets/banner-book.png';

const Banner = () => {
    return (
        <div className='container'>
            <div className='bg-[#F1F1F1] py-10 md:py-12 lg:py-20 px-8 md:px-11 lg:px-28 rounded-3xl'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div>
                        <h1 className='font-PlayfairDisplay text-4xl md:text-5xl lg:text-[56px] font-bold mb-8 lg:mb-10 leading-[1.4] lg:leading-20'>Books to freshen up <br className='hidden lg:block' /> your bookshelf</h1>
                        <button className='py-4 px-9 rounded-lg bg-green-500 text-white font-bold mb-11 lg:mb-0 cursor-pointer hover:bg-green-600 duration-300'>View The List</button>
                    </div>
                    <div>
                        <img src={bannerBook} alt='Banner Book' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;