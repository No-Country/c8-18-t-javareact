import React from 'react';
import Layout from '../layout';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <Layout>
      <div>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000} showStatus={false}>
          <div>
            <img src="https://i.postimg.cc/nzChTD5h/bennerproyect.png" />
          </div>
          <div>
            <img src="https://i.postimg.cc/nzChTD5h/bennerproyect.png" />
          </div>
          <div>
            <img src="https://i.postimg.cc/nzChTD5h/bennerproyect.png" />
          </div>
        </Carousel>
      </div>
    </Layout>
  );
};

export default Home;
