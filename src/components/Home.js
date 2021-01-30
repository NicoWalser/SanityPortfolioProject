import React from 'react';
import image from '../monstera.jpg';

const Home = () => (
  <main>
    <img
      src={image}
      alt='Monstera Leaves'
      className='absolute object-cover w-full h-full'
    />
    <section className='relative flex justify-center min-h-screen ot-12 lg:pt-64 px-8'>
      <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
        Hello
      </h1>
    </section>
  </main>
);
export default Home;
