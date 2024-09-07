import {Link} from 'react-router-dom'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <header className="bg-white p-8 mt-10">
        <div className="grid mt-16 min-h-[22rem] w-full lg:h-[30rem] md:h-[22rem] place-items-stretch">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex text-sm rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-8 px-1 font-medium text-primary">
              Unlock Fluent English with Our AI Tutor
            </div>
            <h1 className="mx-auto my-12 w-full text-2xl lg:max-w-3xl lg:text-6xl leading-snug font-bold text-gray-900 " style={{ lineHeight: '1.3' }}>
              <span className="text-green-500 font-bold">Unlock </span> 
              Fluent English with Our 
              <span className="text-green-500 font-bold"> AI Tutor</span>.
            </h1>
            <p className="mx-auto my-12 w-full text-gray-500 lg:text-lg text-base leading-relaxed max-w-3xl">
  Achieve English fluency faster with AI English Tutor. Our advanced AI adapts lessons to your needs, offering interactive and engaging content to help you succeed in your language goals.
</p>

            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5  py-2 border rounded-lg w-42 md:w-40 lg:w-[18rem]"
                />
                <Link to="/Register">
                <button  className="px-4 py-2 bg-green-500 text-white rounded-lg w-full md:w-auto ">
                  Get Started
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
