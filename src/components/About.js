import React from 'react';
import logo from './../logo.svg';

function About() {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <p className="m-0">Hi, I'm Gregory.</p>
                        
                        <p className="m-0">I'm a Full Stack Software Engineer.</p>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
                    </p>
                    <div className="flex justify-center whitespace-nowrap">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:ouline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="min-w-fit object-cover object-center rounded]"
                        alt="hero"
                        src={logo}
                    />
                </div>
            </div>
        </section>
    );
}


  export default About;