import React from 'react';
import Link from 'next/link'
import GetStarted from '../public/GetStarted.svg'
import Image from 'next/image';
import Header from '../components/Header'

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="skyline  border-b-4 border-gray-900">
        <div className = "flex flex-col justify-center items-center h-200 grow py-16">
          <h1 className = "text-main justify-center text-7xl tracking-wider">
            Estate Eagle
          </h1>
          <p className = "text-gray-500 justify-center text-2xl m-3">Data-Driven Insights To Find Your Dream Home</p>
          <Link className = "py-10" href="/dashboard">
            <div className="bg-main hover:bg-gray-800 hover:scale-110 transition-transform duration-400 text-white font-bold py-2 px-3 rounded-full mt-0">
              <span className='inline'>Get Started    </span>
              <Image className="items-center inline justify-center" src={GetStarted} alt="Get Started Icon" width={20} height={20}/>
            </div>
          </Link>
        </div>  
      </div>
      <div className='bg-smokeGrey px-20 py-20 flex flex-row align-middle '>
        <h1 className = "w-1/2 text-smokeGrey flex justify-center text-3xl pb-5 align-middle">
          About Us
        </h1>
        <p className = "w-2/3 text-gray-400 flex-grow text-center">
        At Estate Eagle, we're dedicated to revolutionizing the way individuals make real estate decisions. 
        Our mission is to empower homebuyers with the knowledge they need to make informed choices in the dynamic housing market.
        Driven by innovation and fueled by our commitment to excellence, we've developed a cutting-edge platform that leverages advanced analytics and predictive modeling to provide unparalleled insights into past, present, and future housing trends.
        Whether you're a first-time buyer or a seasoned investor, our user-friendly interface and comprehensive data resources are designed to guide you every step of the way.
        We're not just building a product – we're building a community of informed and empowered homebuyers. 
        Join us on this journey as we redefine the future of real estate intelligence.
        </p>
      </div>
    </div>
  )
}
export default Landing