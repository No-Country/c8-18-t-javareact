import React, { useContext, useState } from 'react';
import ProductsContext from '../../context/productsContext';
import { Link, useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Modal from '../../components/Modal';
import Layout from '../layout';
import Loading from '../../components/Loading';
import _ from  'lodash';

const GET_CATEGI = gql`
query Categoria($slug: String) {
  categories (where: { slug: $slug}) {
    subcategories {
      name
      id
      image {
       url
      }
      Products {
        id
        name
        price
        description
        image {
          url
        }
      }
    }
  }
}`;

const Category = () => {

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [car, setCar] = useState(false);
  const { selectedProduct } = useContext(ProductsContext);

  const location = useLocation();
  const slug = location.pathname.slice(1);
  const { loading, error, data } = useQuery(GET_CATEGI, {
    variables: { slug },
  });

  if (loading) return <Loading/>;
  if (error) return `Error ! ${error}`;
  const subcategory = data.categories[0];

  return (
    <Layout>
      <div className='flex overflow-x-auto shadow-3x1 bg-white relative w-full'>
        {_.map(subcategory.subcategories, (s, i) => (
          <a href={`#${s.id}`}  key={s.id}>
            <div className='py-4 px-8 text-center cursor-pointer'>
              <img src={s.image.url} className='object-cover w-20 h-20 rounded-full' alt=''/>
              <h4 className='py-2 font-medium'>{s.name}</h4>
            </div>
          </a>
        ))}
      </div>
      <div className='px-16 py-10'>
        {_.map(subcategory.subcategories, (s, i) => (
          <div id={`${s.id}`} key={s.id}>
            <h1 className='font-bold text-2xl my-9'>{s.name}</h1>
            <div className='grid md:grid-cols-3 grid-cols-1'>
              {_.map(s.Products, (p, i) => (
                <div key={p.id} className='shadow-3x0 px-4 py-4 md:my-0 my-4 w-56 text-center hover:scale-105 mx-auto'>
                  <img className='w-full h-48 object-cover' src={p.image.url} alt=''/>
                  <h2 className='py-2 font-medium text-lg'>{p.name}</h2>
                  <p className='font-medium text-xl'>$ {p.price}</p>
                  <button onClick={() => {
                    setOpen(!open);
                    setProduct(p);
                    selectedProduct(p);
                  }}
                  className='mt-2 bg-blue text-white px-12 py-1 font-semibold text-lg rounded-sm'>Agregar</button>
                </div>
              ))}
            </div>
          </div>
        ))}
        {open ? (
          <Modal setOpen={setOpen} product={product} setCar={setCar}/>
        ) : null}
      </div>
      {car ? (
        <div className='fixed top-16 right-1 bg-white h-auto px-8 py-4 border-l-4 border-green-700 shadow-2xl font-semibold'>
          <h1 className='pb-3 text-center'>Producto Agregado<br/>
            <span className='text-green-800 font-semibold'>Exitosamente</span>
          </h1>
          <Link className='text-center bg-black text-white px-9 py-2' to={'/car'}>Ver Carito</Link>
        </div>
      ) : null}
    </Layout>
  );
};

export default Category;
