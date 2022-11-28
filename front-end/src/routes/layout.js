import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { MdMarkEmailRead, MdLocationPin } from 'react-icons/md';
import { BsWhatsapp, BsFacebook, BsCart4 } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import Navbar from '../components/Navbar';

import '../App.css';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='grid grid-cols-2 py-6 px-8'>
        <div className='text-2xl font-bold'>Logo</div>
        <div className='flex justify-end relative'>
          <BiUser className='text-3xl ml-4 cursor-pointer' onClick={() => setOpen(!open)}/>
          <BsCart4 className='text-3xl ml-4'/>
          {open ?
            (
              <div className='absolute bg-black text-white right-16 top-12'>
                <ul className='px-4 py-2'>
                  <li className='py-1 cursor-pointer'><Link to={'/signin'}>Ingresar</Link></li>
                  <li className='py-1 cursor-pointer'><Link to={'/signup'}>Registrase</Link></li>
                </ul>
              </div>
            ) : null}
        </div>
      </div>
      <div>
        <Navbar/>
      </div>
      <main>{children}</main>
      <footer className='grid md:grid-cols-3 grid-cols-1 mt-8 px-8'>
        <div className='py-3'>
          <h2 className='font-semibold text-2xl'>Sobre Nosotros</h2>
          <p className='w-80 pt-3'>Lorem ipsum dolor sit amet consectetur. Gravida mauris vel lacus quis dis
            congue urna mus. Eu ut maecenas pellentesque enim.</p>
        </div>
        <div className='md:mx-auto mx-0 py-3'>
          <h2 className='font-semibold text-2xl'>Contactos</h2>
          <ul className='pt-3'>
            <li className='flex pt-3'><MdMarkEmailRead className='text-2xl'/><span className='ml-3'>email@example.com</span></li>
            <li className='flex py-3'><MdLocationPin className='text-2xl'/><span className='ml-3'>Location Example</span></li>
            <li className='flex'><BsWhatsapp className='text-2xl'/><span className='ml-3'>09999999999</span></li>
          </ul>
        </div>
        <div className='md:mx-auto mx-0 py-3'>
          <h2 className='font-semibold text-2xl'>Redes</h2>
          <ul className='pt-3 flex'>
            <li><BsFacebook className='text-[2.5rem] mr-4'/></li>
            <li><AiFillInstagram className='text-5xl mx-4'/></li>
            <li><AiOutlineTwitter className='text-5xl'/></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
