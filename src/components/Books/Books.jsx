import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res =>res.json())
        .then(data=> setBooks(data))
    },[])


    return (
        <div>
            <h3 className='text-5xl text-center py-5 mt-7 font-bold'>Books</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;