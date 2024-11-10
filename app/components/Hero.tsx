import React from 'react';

const Herohome = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/05/be/79/05be7955a256ab647f01fb486a72d7a6.gif')", // Replace with your image URL
      }}
    >
   
      <div className="absolute inset-0 bg-black opacity-50"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to My Shop webside
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Explore the best products and offers just for you.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 active:scale-90">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Herohome;
