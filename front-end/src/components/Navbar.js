import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Loading from './Loading';
import _ from 'lodash';

const Navbar = () => {
  const GET_CATEGORIA = gql`
  query Categoria {
    categories {
      name
      id
      slug
    }
  }
`;
  const [open, setOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_CATEGORIA);
  if (loading) return <Loading/>;
  if (error) return `Error! ${error}`;

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
                {_.map(data.categories, (c) => (
                  <li key={c.id} className='px-3 py-2 hover:bg-[#167290]'><Link to={`/${c.slug}`}>{c.name}</Link></li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
