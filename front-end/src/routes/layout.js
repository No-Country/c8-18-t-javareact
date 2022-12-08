import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { MdMarkEmailRead, MdLocationPin } from 'react-icons/md';
import { BsWhatsapp, BsFacebook, BsCart4 } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import Navbar from '../components/Navbar';
import ProductsContext from '../context/productsContext';

import '../App.css';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState(false);

  const { orders } = useContext(ProductsContext);

  return (
    <div>
      <div className='grid grid-cols-2 py-6 px-8'>
        <div className='text-2xl font-bold'>Logo</div>
        <div className='flex justify-end relative'>
          <BiUser className='text-3xl ml-4 cursor-pointer' onClick={() => {
            setOpen(!open);
            setCar(false);
          }}/>
          {orders.length !== 0 ? (
            <div
              className='z-20 absolute bottom-4 text-center font-semibold w-5 h-5 rounded-full bg-red-600 text-white mx-auto'>
              {orders.length}
            </div>
          ) : null}
          <BsCart4 className='text-3xl ml-4 z-40'  onClick={() => {
            setCar(!car);
            setOpen(false);
          }}/>
          {open ?
            (
              <div className='absolute bg-black text-white right-16 top-12 z-40'>
                <ul className='px-4 py-2 text-lg font-medium'>
                  <li className='py-1 cursor-pointer hover:text-gray-600'><Link to={'/signin'}>Ingresar</Link></li>
                  <li className='py-1 cursor-pointer hover:text-gray-600'><Link to={'/signup'}>Registrarse</Link></li>
                </ul>
              </div>
            ) : null}
          {car ?
            (
              <div className='absolute bg-black text-white right-16 top-12 z-40'>
                <ul className='px-4 py-2 text-lg font-medium'>
                  <li className='py-1 cursor-pointer hover:text-gray-600'><Link to={'/car'}>Mi Carrito</Link></li>
                </ul>
              </div>
            ) : null}
        </div>
      </div>
      <div>
        <Navbar/>
      </div>
      <main>{children}</main>
      <footer className='w-full grid md:grid-cols-3 grid-cols-1 mt-8 px-8 py-6'>
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
            <li><BsFacebook className='text-[2.5rem] mr-4 mt-1'/></li>
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
