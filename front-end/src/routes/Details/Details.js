import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import Loading from '../../components/Loading';
import Layout from '../layout';
import _ from 'lodash';

const GET_DETAIL = gql`
query Orders($key: String) {
  orders (where: {key: $key}) {
    id
    nombre
    apellido
    direccion
    comentario
    key
    total
    Producto {
      img
      name
      price
    }
  }
}`;

const Details = () => {
  const key = localStorage.getItem('key');
  const [order, setOrder] = useState(false);
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { key },
  });

  if (loading) return <Loading/>;
  if (error) return `Error ! ${error}`;
  const detail = data.orders[0];

  return (
    <Layout>
      <h1 className='font-normal text-center py-8 text-2xl'>
        Tu orden es la <span className='font-semibold'>{key}</span>
      </h1>
      {order ? (
        <div className='flex justify-center'>
          <button className='px-3 py-2 bg-blue text-white' onClick={() => setOrder(!order)}>Ver Detalle</button>
        </div>
      ) :
        <div>
          <ul className='p-20 text-2xl'>
            <li className='py-4 font-semibold'>Nombre: <span className='font-normal'>{detail.nombre}</span></li>
            <li className='py-4 font-semibold'>Apellido: <span className='font-normal'>{detail.apellido}</span></li>
            <li className='py-4 font-semibold'>Direccióin: <span className='font-normal'>{detail.direccion}</span></li>
            <li className='py-4 font-semibold'>Comentario: <span className='font-normal'>{detail.comentario}</span></li>
          </ul>
          <h1 className='px-20 text-2xl font-semibold pb-7'>Productos</h1>
          {_.map(detail.Producto, (p) => (
            <div key={p.id} className='px-20 grid grid-cols-2'>
              <img src={p.img} alt='' className='w-40 h-40'/>
              <div className='font-medium text-2xl'>
                <p >{p.name}</p>
                <p className='pt-6'> $ {p.price}</p>
              </div>
            </div>
          ))}
          <p className='px-20 font-medium text-right text-2xl'>Total a pagar : ${detail.total}</p>
        </div>
      }
    </Layout>
  );
};

export default Details;
