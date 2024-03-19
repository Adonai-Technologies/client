import React from 'react';

function Intro() {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
            <h1 className="text-white">Hi, I'm</h1>
            <h1
                className="text-7xl sm:text-3xl text-secondary font-semibold">Akua Konadu</h1>
            <h1
                className="text-7xl sm:text-3xl text-white font-semibold">I create Apps For The Web</h1>
            <p
                className="text-white  w-2/4 sm:w-full">Im A Mern Stack Web Developer. Currently ,I'm working as a full Stack Developer
                in Ghana.
                I also Contribute to Open Souce Project On GitHub</p>
            <button
                className="border-2 border-tertiary text-tertiary px-10 py-5 rounded">Get Started</button>
        </div>
    );
}

export default Intro;
