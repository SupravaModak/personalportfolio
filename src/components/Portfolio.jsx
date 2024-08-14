import React from 'react';
import arrayDestruct from '../assets/portfolio/buildfitness.jpg'
import instalNode from '../assets/portfolio/weather.png'
import navbar from '../assets/portfolio/E-shop.jpg'


const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:arrayDestruct,
            href:"https://build-fitness.vercel.app/",  
        },
        {
            id:2,
            src:instalNode,
            href:"",
            
        },
        {
            id:3,
            src:navbar,
            href:"https://e-shop-hazel-chi.vercel.app/",
        },
    ]  
return (
    <div name="portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
            {
                portfolios.map(({id,src,href}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
                        <img src={src} 
                        alt="" 
                        className='duration-200 rounded-md hover:scale-105'
                        />
                        <a href={href}>
                            
                        </a>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                </div>
                ))
            }  
            </div>   
        </div>
    </div>
);
};
export default Portfolio;