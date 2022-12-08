import React from 'react';

import Layout from '../layout';

const Signup = () => {
  return (
    <Layout>
      <div className='justify-center flex mt-8'>
        <div className="w-full md:max-w-[25rem] max-w-xs">
          <form className="bg-white shadow-3x1 rounded px-8 pt-6 pb-8 mb-4">
            <h2 className='text-center font-bold text-gray-400 text-2xl pb-5'>Registrarse</h2>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombres
              </label>
              <input
                className={`shadow appearance-none border rounded w-full p-3
                  text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="name"
                type={'text'} placeholder="Nombres"/>
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full p-3
                  text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="emial"
                type={'email'} placeholder="Email"/>
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Teléfono
              </label>
              <input
                className={`shadow appearance-none border rounded w-full p-3
                  text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="phone"
                type={'text'} placeholder="Telefono"/>
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow appearance-none border border-red-500 rounded w-full p-3 text-gray-700 mb-3 leading-tight
                focus:outline-none focus:shadow-outline`} id="password" type={'password'} placeholder="******************"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <button
              className="w-full bg-blue hover:bg-blue-700 text-white font-bold py-2 px-9 rounded focus:outline-none"
              type="button">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
