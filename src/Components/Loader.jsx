import React from 'react';

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
      <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
         <h1 className="text-secondary t">ADO-Tech</h1>
         <h1 className="text-white a">A</h1>
         <h1 className="text-tertiary k">K</h1>
      </div>
    </div>
  );
}

export default Loader;
