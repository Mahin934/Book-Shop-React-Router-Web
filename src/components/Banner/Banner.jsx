import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero rounded-lg py-12 bg-base-200">
                <div className="hero-content flex-col p-0 lg:flex-row-reverse">
                    <img
                        src={bookimg}
                        className="w-3/5 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold pb-8">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[rgb(35,190,10)] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;