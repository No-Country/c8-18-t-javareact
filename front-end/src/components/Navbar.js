import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-nav'>
      <ul className='flex px-8 py-4'>
        <li className='font-semibold mr-4'><Link to={'/'}>Inicio</Link></li>
        <li className='font-semibold mx-4'>Contacto</li>
        <li onClick={() => setOpen(!open)}
          className='font-semibold mx-4 flex cursor-pointer relative w-56'>
            Categorías
          <AiOutlineCaretDown className='ml-1 mt-[0.3rem]'/>
          {open ? (
            <div className='bg-blue absolute top-8 z-10 right-0 py-2 px-2'>
              <ul className='text-white'>
                <li className='px-3 py-2 hover:bg-[#167290]'><Link to={'/peli'}>Películas</Link></li>
                <li className='px-3 py-2 hover:bg-[#167290]'><Link to={'/disco'}>Discos</Link></li>
                <li className='px-3 py-2 hover:bg-[#167290]'><Link to={'/book'}>Libros</Link></li>
                <li className='px-3 py-2 hover:bg-[#167290]'><Link to={'/game'}>Videojuegos</Link></li>
              </ul>
            </div>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
