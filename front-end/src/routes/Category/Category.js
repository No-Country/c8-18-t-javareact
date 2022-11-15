import React, { useContext, useState } from 'react';
import ProductsContext from '../../context/productsContext';

import Modal from '../../components/Modal';
import Layout from '../layout';
import _ from  'lodash';

const Category = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const { selectedProduct } = useContext(ProductsContext);

  const products = [
    { id: 1, title: 'Book', price: 10, img: 'https://i.postimg.cc/nzChTD5h/bennerproyect.png',
      description: 'Lorem ipsum dolor sit amet consectetur. Non pellentesque vitae consequat',

    },
    { id: 2, title: 'Book', price: 20, img: 'https://i.postimg.cc/nzChTD5h/bennerproyect.png',
      description: 'Lorem ipsum dolor sit amet consectetur. Non pellentesque vitae consequat',

    },
  ];
  return (
    <Layout>
      <div className='flex overflow-x-auto shadow-3x1 bg-white relative w-full'>
        <div className='py-4 px-8 text-center cursor-pointer'>
          <img src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' className='object-cover w-20 h-20 rounded-full' alt=''/>
          <h4 className='py-2 font-medium'>Romance</h4>
        </div>
        <div className='py-4 px-8 text-center cursor-pointer'>
          <img src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' className='object-cover w-20 h-20 rounded-full' alt=''/>
          <h4 className='py-2 font-medium'>Romance</h4>
        </div>
        <div className='py-4 px-8 text-center cursor-pointer'>
          <img src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' className=' object-cover w-20 h-20 rounded-full' alt=''/>
          <h4 className='py-2 font-medium'>Romance</h4>
        </div>
        <div className='py-4 px-8 text-center cursor-pointer'>
          <img src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' className='object-cover w-20 h-20 rounded-full' alt=''/>
          <h4 className='py-2 font-medium'>Romance</h4>
        </div>
      </div>
      <div className='px-16 py-10'>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          {_.map(products, (p, i) => (
            <div key={p.id} className='shadow-3x0 px-4 py-4 md:my-0 my-4 w-56 text-center hover:scale-105 mx-auto'>
              <img className='w-full h-48 object-cover' src={p.img} alt=''/>
              <h2 className='py-2 font-medium text-lg'>{p.title}</h2>
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
        {open ? (
          <Modal setOpen={setOpen} product={product}/>
        ) : null}
      </div>
    </Layout>
  );
};

export default Category;
