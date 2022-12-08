import React, { useContext, useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { v4 as uuidv4 } from 'uuid';
import { MdAdd, MdMinimize } from 'react-icons/md';
import ProductsContext from '../context/productsContext';

import PropTypes from 'prop-types';

const Modal = ({ setOpen, product, setCar }) => {

  const { name, price, description, image } = product;
  const img = image.url;
  const { addOrder } = useContext(ProductsContext);
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateQuantity();
  }, [cantidad]);

  const decrease = async () => {
    if (cantidad > 1) {
      const newCantidad = await parseInt(cantidad) - 1;
      setCantidad(newCantidad);
    }
  };

  const increase = async () => {
    const newCantidad = await parseInt(cantidad) + 1;
    setCantidad(newCantidad);
  };

  const calculateQuantity = () => {
    let sales = '';
    if (product) {
      sales = price * cantidad;
    }
    setTotal(sales);
  };
  const addProduct = async () => {
    let Pedido = null;
    if (product) {
      Pedido = {
        name,
        price,
        description,
        img,
        cantidad,
        total,
        key: uuidv4(),
      };

    }
    addOrder(Pedido);
    setOpen(false);
    setCar(true);
  };
  return (
    <div className='fixed top-0 w-full bottom-0 bg-fondo left-0 md:px-56 px-3 md:py-20 py-3'>
      <div className='bg-white grid md:grid-cols-2 grid-cols-1 relative md:overflow-auto overflow-scroll md:h-[30rem] h-full md:py-0 py-8'>
        <GrFormClose className='absolute right-3 top-3 text-4xl cursor-pointer' onClick={() => setOpen(false)}/>
        <div className='p-16'>
          <img className='object-cover h-80 w-full' src={img} alt=''/>
        </div>
        <div className='p-9 pt-16 md:pb-20 pb-2'>
          <h1 className='text-2xl font-medium'>{name}</h1>
          <p className='text-3xl font-semibold py-8'>$ {price}</p>
          <p className='text-lg font-normal text-justify pb-10'>{description}</p>
          <div className='grid grid-cols-2 relative top-10'>
            <div className='flex'>
              <button onClick={() => decrease()}
                className="text-3xl bg-slate-100 rounded-sm hover:bg-red-700 hover:text-white">
                <MdMinimize className="relative bottom-2"/>
              </button>
              <input value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value ?  e.target.value : 0))}
                className="w-20 text-center"/>
              <button onClick={() => increase()}
                className="text-3xl bg-slate-100 rounded-sm hover:bg-red-700 hover:text-white">
                <MdAdd/>
              </button>
            </div>
            <button onClick={addProduct} disabled={price ? false : true}
              className={`w-full font-semibold py-2 ${price ? 'bg-blue text-white' : 'bg-white text-black'}`}>
                Agregar Al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setOpen: PropTypes.func,
  product: PropTypes.object,
  setCar: PropTypes.func,
};

export default Modal;