import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import ProductsContext from '../../context/productsContext';
import Layout from '../layout';
import { AiFillDelete } from 'react-icons/ai';
import shopping from '../../assets/car.svg';

import _ from 'lodash';

const MyCar = () => {
  // const envio = 1.50;
  const { orders, productos, subTotal, removeOrder, calculateSubTotal } = useContext(ProductsContext);

  useEffect(() => {
    priceSubTotal();
    // priceTotal();
  }, [orders]);

  const priceSubTotal = () => {
    let newTotal = 0;
    newTotal = orders.reduce((newTotal, pedido) => newTotal + pedido.total, 0);
    calculateSubTotal(newTotal);
  };

  // const priceTotal = () => {
  //   let newTotal = 0;
  //   newTotal = orders.reduce((newTotal, pedido) => newTotal + pedido.total + envio, 0);
  //   calculateTotal(newTotal);
  // };

  // console.log(subTotal);

  return (
    <Layout>
      {orders.length === 0 ? (
        <div className='text-center pt-10 text-2xl text-[#3C3D38] font-semibold relative p-8'>
          <h1><span className='italic'>!! </span>Upss.. Tu carrito al momento se encuentra vacío</h1>
          <img src={shopping} alt='' className='mx-auto '/>
        </div>
      ) : (
        <div className='p-8'>
          <h1 className='font-semibold'>Mis Compras</h1>
          <div className='md:grid hidden grid-cols-5 relative'>
            <h1 className='md:flex hidden font-semibold text-base text-gray-500 py-8'>Producto</h1>
            <h1 className='md:flex hidden py-8'></h1>
            <h1 className='md:flex hidden font-semibold text-base text-gray-500 py-8'>Precio</h1>
            <h1 className='md:flex hidden font-semibold text-base text-gray-500 py-8'>Cantidad</h1>
            <h1 className='md:flex hidden font-semibold text-base text-gray-500 py-8'>Total</h1>
          </div>
          {_.map(orders, (o, i) => (
            <div key={i} className='md:grid hidden  grid-cols-5'>
              <div className='mb-10'>
                <img className='w-32 h-32 object-cover' src={o.img} alt=''/>
              </div>
              <div className='mb-10'>
                <h1 className='py-5 text-lg'>{o.title}</h1>
              </div>
              <div className='mb-10'>
                <p className='text-2xl font-normal py-5'>$ {o.price}</p>
              </div>
              <div className='mb-10'>
                <p className='text-2xl font-normal py-5'>{o.cantidad}</p>
              </div>
              <div className='mb-10'>
                <div className='text-2xl font-bold py-5 flex'>$ {o.total}
                  <AiFillDelete onClick={() => {
                    removeOrder(o.key);
                    Cookies.remove('productos', JSON.stringify(productos));
                  }}
                  className='ml-16 text-red-700 cursor-pointer'/>
                </div>
              </div>
            </div>
          ))}
          {/* //responsive */}
          {_.map(orders, (ok, i) => (
            <div key={i} className='grid md:hidden grid-cols-2 relative pt-6'>
              <div className='mb-10'>
                <img className='w-32 h-32 object-cover' src={ok.img} alt=''/>
              </div>
              <div className=''>
                <div className='grid grid-cols-2'>
                  <h1 className='text-2xl'>{ok.title}</h1>
                  <p className='text-2xl font-bold text-end'>$ {ok.total}</p>
                </div>
                <div className='grid-cols-3 grid pt-12'>
                  <p className='text-2xl'>$ {ok.price}</p>
                  <p className='text-2xl font-bold text-center'>{ok.cantidad}</p>
                  <p className='flex justify-end'>
                    <AiFillDelete onClick={() => {
                      removeOrder(ok.key);
                      Cookies.remove('productos', JSON.stringify(productos));
                    }}
                    className='text-red-700 cursor-pointer  text-2xl'/>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className='md:float-right float-none'>
            <div className='grid grid-cols-2 pr-0 py-8'>
              <h1 className='text-2xl font-semibold mr-36 ml-0'>Sub Total</h1>
              <p className='text-2xl font-semibold'>$ {subTotal.toFixed(2)}</p>
              {/* <h1 className='text-2xl font-semibold mr-36 ml-0 pt-4'>Envio</h1>
              <p className='text-2xl font-semibold pt-4'>$ 1.50</p>
              <h1 className='text-2xl font-semibold mr-36 ml-0 pt-4'>Total</h1>
              <p className='text-2xl font-semibold pt-4'>$ {total.toFixed(2)}</p> */}
            </div>
            <button className='text-white bg-blue md:px-36  px-0 md:w-auto w-full py-4'>Comprar</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyCar;
