import React from 'react'

const About = () => {
return (
    <div name="about" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='mt-20 text-xl'>
                Hi everyone , my name is Suprava Modak.
                I have done my BTech from IEM, Kolkata.
                It has been two years I have been into developing
                websites and using web application technologies. It 
                has always been a dream for me to become a Web Developer.
                Recently I have been going through backend technologies 
                as well as Machine Learning using Python. I just love 
                coding since my school days and maintained it through my 
                college life. Ask me anything under the sun about these.
                I am also into football and singing as I always try to 
                keep my mind working and into some action. I hate being lazy 
                and my only aim right now is to grab the job offer at my 
                level best.
            </p>
        </div>
    </div>
);
};

export default About
