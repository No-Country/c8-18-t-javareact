import React, { useState } from 'react';
import '../App.css';
import { BiUser } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      --Nav Aqui
      </div>
      <main>{children}</main>
      <footer>
        --Footer Aqui
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
