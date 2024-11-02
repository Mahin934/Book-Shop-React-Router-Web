import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStorReadList, addToStorWishList } from '../Utility/addtoDB';
import { toast } from 'react-toastify';


const BookDetails = () => {



    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    

    const handleRead =(id)=>{
           addToStorReadList(id);
    }

    const handleWish =(id)=>{
        addToStorWishList(id);
    }


    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;


    return (
        <div className='py-10 w-full'>
            <div className="gap-10 grid grid-cols-1 lg:grid-cols-2  w-full">
                <div className='bg-base-200 py-16 rounded-lg  flex justify-center '><img
                    src={image}
                    className="rounded-lg shadow-2xl h-[650px] w-2/3" /></div>
                <div>
                    <h1 className="text-6xl font-bold">{bookName}</h1>
                    <p className="py-8 text-xl work-sans text-[rgba(19,19,19,0.8)]">By: {author}</p>
                    <div className='border-t-2'></div>
                    <p className='text-lg py-3'>{category}</p>
                    <div className='border-t-2'></div>
                    <div>
                        <p className='work-sans text-[rgba(19,19,19,0.7)] py-5'><span className='text-black font-bold'>Review:</span> {review}</p>
                    </div>
                    <div className="card-actions justify-start pb-4">
                        <span className='work-sans text-lg'>Tag:</span>
                        {
                            tags.map((tag, index) => <div key={index} className='badge bg-[rgba(35,190,10,0.05)] text-[16px] text-[rgb(35,190,10)]  p-4'>#{tag}</div>)
                        }
                    </div>
                    <div className='border-t-2 '></div>

                    <div className='space-y-4 py-5'>
                        <div className='work-sans text-[rgba(19,19,19,0.7)]'> Number of Pages:   <span className='text-black pl-20 font-bold'>{totalPages}</span></div>
                        <div className='work-sans text-[rgba(19,19,19,0.7)]'> Publisher:   <span className='text-black pl-36 font-bold'>{publisher}</span></div>
                        <div className='work-sans text-[rgba(19,19,19,0.7)]'> Year of Publishing:   <span className='text-black pl-[75px] font-bold'>{yearOfPublishing}</span></div>
                        <div className='work-sans text-[rgba(19,19,19,0.7)]'> Rating:   <span className='text-black pl-[165px] font-bold'>{rating}</span></div>
                    </div>
                    <div className='space-x-4 py-4'>
                    <button onClick={()=>handleRead(bookId)} className="btn btn-outline btn-accent px-6">Read</button>
                    <button onClick={()=>handleWish(bookId)} className="btn  btn-accent px-7">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;