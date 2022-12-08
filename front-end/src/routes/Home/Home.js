import React, { useState } from 'react';
import Layout from '../layout';
import { Carousel } from 'react-responsive-carousel';
import { gql, useQuery } from '@apollo/client';

import mario from '../../assets/Mario.jpg';
import pelucila from '../../assets/movie.png';
import disco from '../../assets/disco.jpg';
import { AiOutlineStar } from 'react-icons/ai';
import { FaTruckLoading } from 'react-icons/fa';
import Loading from '../../components/Loading';
import { VscDebugStepBack } from 'react-icons/vsc';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ImTicket } from 'react-icons/im';
import Modal from '../../components/Modal';

import _ from 'lodash';

const GET_HOME = gql`
  query Home {
    subcategories(where: { name: "Promociones" }) {
      id
      name
      image {
        url
      }
      Products {
        id
        image {
          url
        }
        price
      }
    }
    categories {
      name
      id
      slug
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);
  if (loading) return <Loading/>;
  if (error) return `Error! ${error}`;
  const promo = data.subcategories[0];
  // const categories = data.categories;
  console.log(data);

  return (
    <Layout>
      <div>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000} showStatus={false}>
          <div>
            <img className='w-full md:h-[30rem] h-96 object-cover object-top'
              src="https://res.cloudinary.com/mavenbox/image/upload/v1670465525/unnamed_ae038918bd.jpg" />
          </div>
          <div>
            <img className='w-full md:h-[30rem] h-96 object-cover object-top'
              src="https://res.cloudinary.com/mavenbox/image/upload/v1670457877/1663869098_273384_1663869687_noticia_normal_51d7c5bc41.jpg" 
            />
          </div>
          <div>
            <img className='w-full md:h-[30rem] h-96 object-cover object-top'
              src="https://res.cloudinary.com/mavenbox/image/upload/v1670523515/movie_889db13f11.jpg" />
          </div>
        </Carousel>
        <div className='text-center py-8'>
          <h1 className='font-semibold'>Las Promociones del Día</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 pt-8 px-8'>
          {_.map(promo.Products, (p, i) => (
            <div onClick={() => {
              setOpen(!open);
              setProduct(p);
            }} key={p.id} className='text-center mx-auto'>
              <img src={p.image.url} alt="" className='w-32 h-32 mx-auto object-cover'/>
              <h1 className='font-semibold pt-2'>{p.name}</h1>
              <div className='flex text-xl py-3 mb-4'>
                <AiOutlineStar className='text-yellow-500'/>
                <AiOutlineStar className='text-yellow-500 ml-2'/>
                <AiOutlineStar className='text-yellow-500 mx-2'/>
                <AiOutlineStar/>
              </div>
              <p className='font-medium'>$ {p.price} <span className='text-gray-600 font-medium ml-3'>$ 30.00</span></p>
            </div>
          ))}
          {open ? <Modal product={product} setOpen={setOpen}/> : null}
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div>
          <div className='bg-none bg-cover pt-9 px-12 m-8 md:h-96 h-56'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)),
            url(https://www.mrbooks.com/mrbooks/portadas/9789585234055.jpg)` }}>
            <h1 className='text-4xl font-semibold text-white'>Libros</h1>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='bg-center bg-cover bg-no-repeat pt-9 px-12 m-8 md:h-40 h-56'
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)), url(${mario})` }}>
              <h1 className='text-4xl font-semibold text-white'>Video Juegos</h1>
            </div>
            <div className='bg-center bg-cover bg-no-repeat m-8  pt-9 px-12 md:h-40 h-56'
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)),
              url(${disco})` }}>
              <h1 className='text-4xl font-semibold text-white'>Discos</h1>
            </div>
          </div>
        </div>
        <div className='bg-center bg-cover bg-no-repeat py-9 px-12 m-8 md:h-auto h-56'
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.47)),
          url(${pelucila})` }}>
          <h1 className='text-4xl font-semibold text-white'>Peliculas</h1>
        </div>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 p-8'>
        <div className='flex pb-8'>
          <FaTruckLoading className='text-yellow-600 text-3xl mx-3'/>
          <p>
            FREE SHIPPING<br/>
            From all orders over $100
          </p>
        </div>
        <div className='flex pb-8'>
          <VscDebugStepBack className='text-yellow-600 text-3xl mx-3'/>
          <p>
            FREE RETURNS<br/>
            Return money within 30 days
          </p>
        </div>
        <div className='flex pb-8'>
          <RiLockPasswordFill className='text-yellow-600 text-3xl mx-3'/>
          <p>
            FREE RETURNS<br/>
            Return money within 30 days
          </p>
        </div>
        <div className='flex pb-8'>
          <ImTicket className='text-yellow-600 text-3xl mx-3'/>
          <p>
            FREE RETURNS<br/>
            Return money within 30 days
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
