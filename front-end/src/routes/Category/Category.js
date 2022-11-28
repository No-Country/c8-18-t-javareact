import React from 'react';
import Layout from '../layout';

const Category = () => {
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
          <div className='shadow-3x0 px-4 py-4 md:my-0 my-4 w-56 text-center hover:scale-105 mx-auto'>
            <img className='w-full h-48 object-cover' src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' alt=''/>
            <h2 className='py-2 font-medium text-lg'>Titulo</h2>
            <p className='font-medium text-xl'>$20</p>
            <button className='mt-2 bg-blue text-white px-12 py-1 font-semibold text-lg rounded-sm'>Agregar</button>
          </div>
          <div className='shadow-3x0 px-4 py-4 w-56  md:my-0 my-4 text-center hover:scale-105 mx-auto'>
            <img className='w-full h-48 object-cover' src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' alt=''/>
            <h2 className='py-2 font-medium text-lg'>Titulo</h2>
            <p className='font-medium text-xl'>$20</p>
            <button className='mt-2 bg-blue text-white px-12 py-1 font-semibold text-lg rounded-sm'>Agregar</button>
          </div>
          <div className='shadow-3x0 px-4 py-4 w-56  md:my-0 my-4 text-center hover:scale-105 mx-auto'>
            <img className='w-full h-48 object-cover' src='https://i.postimg.cc/nzChTD5h/bennerproyect.png' alt=''/>
            <h2 className='py-2 font-medium text-lg'>Titulo</h2>
            <p className='font-medium text-xl'>$20</p>
            <button className='mt-2 bg-blue text-white px-12 py-1 font-semibold text-lg rounded-sm'>Agregar</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
