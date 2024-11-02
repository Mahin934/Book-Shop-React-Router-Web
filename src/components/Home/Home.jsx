import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='pb-7 pt-3'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;