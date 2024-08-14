import React from "react";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
const SocialLinks = () => {

    const links= [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://linkedin.com/in/suprava-modak-7baa18228',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/SupravaModak',
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:modaksuprava.74@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/cvwithphoto.pdf',
            style:'rounded-br-md',
            download: true,
        },
    ];
return (
<div className="  lg:flex flex-col top-[22%] left-0 fixed ">
    <ul>
        {links.map(({id,child,href,style,download}) => (
            <li key={id} className={"flex items-center justify-between w-40 px-4 bg-gray-500 h-14 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " +  +style}>
            <a href={href}
            className="flex items-center justify-between w-full text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
            >
                {child}
            </a>
        </li>
        ))}    
    </ul>
</div>
); 
};

export default SocialLinks;