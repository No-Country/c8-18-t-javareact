import React, { useState, useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as  yup from 'yup';
import Cookies from 'js-cookie';

import ProductsContext from '../context/productsContext';
import _ from 'lodash';

import PropTypes from 'prop-types';
import Notification from './Notification';

const ADDORDENES = gql`
mutation Ordenes($orden: OrderInput) {
  createOrder(input: { data: $orden }) {
    order {
      id
      createdAt
    }
  }
}`;

const Checkout = ({ setCheckout }) => {

  const { orders, subTotal, total, orderPlaced, calculateTotal } = useContext(ProductsContext);
  const history = useNavigate();
  const [addOrder] = useMutation(ADDORDENES);
  const [ordenes, setOrdenes] = useState(false);

  const createOrders = async (orden) => {
    const subordersResult = await addOrder({
      variables: {
        orden: orden,
      },
    });
    orderPlaced(subordersResult.data.createOrder.order.id);
    setOrdenes(!!subordersResult?.data?.createOrder?.order?.id);
  };

  const priceTotal = () => {
    const envio = 1.50;
    let newTotal = 0;
    newTotal = subTotal - envio;
    calculateTotal(newTotal);
  };
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      comentario: '',
    },
    validationSchema: yup.object({
      nombre: yup.string().min(3, 'Tu nombres deben tener mín 3 caracteres').required('Los nombres son requeridos'),
      email: yup.string().email('El email es invalido').required('El email es requerido'),
      apellido: yup.string().min(3, 'Tu apellidos deben tener mín 3 caracteres').required('Los apellidos son requeridos'),
      telefono: yup.string().required('El numero es campo obligatorio'),
      direccion: yup.string().min(3, 'La dirección deben tener mín 3 caracteres').required('La dirección es campo obligatorio'),
      comentario: yup.string().max(250, 'La cadena es muy larga'),
    }),
    onSubmit: data => {
      const key = uuidv4();
      localStorage.setItem('key', key);
      Cookies.set('key', key);
      data.Producto = orders;
      data.total = total;
      data.key = key;
      createOrders(data);
      setCheckout(false);
      history('/details');
    },
  });
  return (
    <div className='fixed top-0 w-full bottom-0 bg-fondo left-0 p-20'>

      <div className='bg-white grid grid-cols-2 p-8 overflow-y-scroll h-full relative'>
        <GrFormClose className='absolute right-3 top-3 text-4xl cursor-pointer' onClick={() => {
          setCheckout(false);
          priceTotal();
        }}/>
        {!ordenes ?
          <>
            <div>
              <h1 className='text-center py-4 font-semibold text-2xl'>Art lobby</h1>
              <form onSubmit={formik.handleSubmit}>
                <label className='text-justify font-semibold'>Email</label>
                <input
                  className='w-full px-3 py-2 focus:outline-none rounded-md border border-solid border-[#B58200]' type='email' id='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? (
                  <Notification message={formik.errors.email}/>
                ) : null }
                <div className='grid grid-cols-2 my-4'>
                  <div className='mr-2'>
                    <label className='text-justify font-semibold'>nombre</label>
                    <input className='w-full px-3 py-2 focus:outline-none rounded-md border border-solid border-[#B58200]'
                      type='text' id='nombre'
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}/>
                    {formik.touched.nombre && formik.errors.nombre ? (
                      <Notification message={formik.errors.nombre}/>
                    ) : null }

                  </div>
                  <div className='ml-2'>
                    <label className='text-justify font-semibold'>apellido</label>
                    <input className='w-full px-3 py-2 focus:outline-none rounded-md border border-solid border-[#B58200]'
                      type='text' id='apellido'
                      value={formik.values.apellido}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}/>
                    {formik.touched.apellido && formik.errors.apellido ? (
                      <Notification message={formik.errors.apellido}/>
                    ) : null }
                  </div>
                  <div className=' mt-4'>
                    <label className='text-justify font-semibold'>Telefono</label>
                    <input className='w-full px-3 py-2 focus:outline-none rounded-md border border-solid border-[#B58200]'
                      type='text' id='telefono'
                      value={formik.values.telefono}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}/>
                    {formik.touched.telefono && formik.errors.telefono ? (
                      <Notification message={formik.errors.telefono}/>
                    ) : null }
                  </div>
                </div>
                <label className='text-justify font-semibold'>Direccion</label>
                <input className='mb-4 w-full px-3 py-2 focus:outline-none rounded-md border border-solid border-[#B58200]'
                  type='text' id='direccion'
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                {formik.touched.direccion && formik.errors.direccion ? (
                  <Notification message={formik.errors.direccion}/>
                ) : null }

                <label htmlFor="comentario" className="text-justify font-semibold">Comentarios</label>
                <textarea id="comentario"
                  value={formik.values.comentario}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-[#B58200] focus:outline-none"
                ></textarea>
                <button
                  className='bg-blue text-white font-semibold w-full py-3 rounded-md mt-8' type='submit'>Comprar</button>
              </form>
            </div>
            <div className='px-20'>
              <h2 className='text-center font-semibold text-2xl pb-14'>Detalle de la compra</h2>
              {_.map(orders, (ok, i) => (
                <div key={i} className='grid grid-cols-2 relative'>
                  <div className='mb-10 mr-3'>
                    <img className='w-20 h-20 object-cover' src={ok.img} alt=''/>
                  </div>
                  <div className='mt-6'>
                    <div className='grid grid-cols-3'>
                      <h1 className='text-base w-full'>{ok.name}</h1>
                      <p className='text-base font-bold text-center w-full'>{ok.cantidad}</p>
                      <p className='text-base font-bold text-end w-full'>$ {ok.total}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className='float-right'>
                <div className='grid grid-cols-2 pr-0 py-8'>
                  <h1 className='text-xl font-semibold mr-5'>Sub Total</h1>
                  <p className='text-xl font-semibold'>$ {subTotal.toFixed(2)}</p>
                  <h1 className='text-xl font-semibold pt-4 mr-5'>Envio</h1>
                  <p className='text-xl font-semibold pt-4'>$ 1.50</p>
                  <h1 className='text-xl font-semibold pt-4 mr-5'>Total</h1>
                  <p className='text-xl font-semibold pt-4'>$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </> :  setCheckout(false)
        }
      </div>
    </div>
  );
};

Checkout.propTypes = {
  setCheckout: PropTypes.func,
};

export default Checkout;
