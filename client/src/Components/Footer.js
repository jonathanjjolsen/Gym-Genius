import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-black py-2 fixed-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center '>
                        <p className='fs-4 text-light'> © Gym Genius 2023</p>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;
