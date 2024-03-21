import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function LeftSider() {
	return (
		<div className='fixed left-0 bottom-0 px-10 sm:static '>
			<div className='flex flex-col items-center'>
				<div className='flex flex-col gap-3 sm:flex-row'>
					<a target="_blank" href="https://web.facebook.com/Adonai.Technologies.7"><CiFacebook className='text-gray-400  cursor-pointer hover:text-white' /></a>
					<a target="_blank" href=""><CiMail className='text-gray-400  cursor-pointer hover:text-white' /></a>
					<a target="_blank" href=""><CiInstagram className='text-gray-400  cursor-pointer hover:text-white' /></a>
					<a target="_blank" href=""><CiLinkedin className='text-gray-400  cursor-pointer hover:text-white' /></a>
					<a target="_blank" href="https://github.com/Adonai-Technologies"><FaGithub className='text-gray-400  cursor-pointer hover:text-white' /></a>
					<a target="_blank" href="https://twitter.com/AkuaAkua1993"><FaXTwitter className='text-gray-400  cursor-pointer hover:text-white' /></a>
				</div>
				<div className='w-[1px] h-32  bg-[#1c7177] sm:hidden'></div>
			</div>
		</div>
	);
}

export default LeftSider;
