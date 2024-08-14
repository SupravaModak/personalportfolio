import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import next from '../assets/nextjs.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import c from '../assets/c.png';


const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-sky-600'
        },
        {
            id:5,
            src:next,
            title:'Next',
            style:'shadow-white'
        },
        {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
        },
        {
            id:7,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:8,
            src:java,
            title:'Java',
            style:'shadow-blue-500'
        },
        {
            id:9,
            src:python,
            title:'Python',
            style:'shadow-yellow-500'
        },
        {
            id:10,
            src:c,
            title:'C',
            style:'shadow-blue-500'
        },
    ]
return (
    <div name='experience' className='w-full bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full max-w-screen-lg p-4 mx-auto text-white'>
            <div>
                <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                <p className='py-9'>These are the technologies I've worked with</p>
            </div> 

            <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                {
                    techs.map(({id,src,title,style}) => (
                        <div key={id} 
                        className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'></p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
);
};

export default Experience;