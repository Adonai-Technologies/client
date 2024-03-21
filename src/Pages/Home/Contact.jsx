import React from "react";
import SectionTitle from "../../Components/SectionTitle";

function Contact() {
	const user = {
		name: "Akua Konadu",
		age: null,
		gender: "Female",
		mobile: "+233 54 965 2969",
		email: "akonadu506@gmail.com",
		country: "Ghana",
	};

	return (
		<div>
			<SectionTitle Title='Get In Touch' />

			<div className='flex sm:flex-col items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<p className='text-tertiary'>{"{"}</p>
					{Object.keys(user).map((key) => (
						<p className='ml-5 '>
							<span className='text-tertiary'>{key} : </span>
							<span className='text-tertiary'>{user[key]}</span>
						</p>
					))}
					<p className='text-tertiary'>{"}"}</p>
				</div>
				<div className='h-[400px]'>
					<lottie-player
						src='https://lottie.host/dad08230-2077-4a7b-bdb0-dcd10704452f/exKDsM2SLT.json'
						background='##FFFFFF'
						autoplay></lottie-player>
				</div>
			</div>
		</div>
	);
}

export default Contact;
