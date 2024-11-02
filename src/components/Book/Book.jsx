import React from 'react';
import { IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,bookName, author, image, category, tags, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className='flex justify-center'>
                <div className="card bg-base-100 w-10/12 shadow-xl">
                    <div className=' p-6'>
                        <figure className='bg-slate-400 rounded-lg py-14'>
                            <img
                                src={image} className=' h-44' />
                        </figure>
                    </div>
                    <div className="card-actions justify-start px-6">
                        {
                            tags.map((tag,index) => <div key={index} className='badge bg-[rgba(35,190,10,0.05)] text-[16px] text-[rgb(35,190,10)]  p-4'>{tag}</div>)
                        }
                    </div>
                    <div className="card-body p-6">
                        <h2 className="card-title text-xl">
                            {bookName}
                        </h2>
                        <div className='text-base py-2 text-[rgba(19,19,19,0.8)]'>By: {author}</div>
                        <div className='border-t-2 border-dashed'></div>
                        <div className="card-actions justify-between py-2">
                            <div className="">{category}</div>
                            <div className=" flex items-center work-sans gap-2 text-xl">{rating} <IoMdStarOutline /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;