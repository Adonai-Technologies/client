import React from 'react';

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between'>
      <h1 className="text-secondary text-4xl font-semibold"><a href=""><img className='w-20' src="images/Ado-tech.png" alt="" /></a></h1>
      <h1 className="text-white text-4xl font-semibold">A</h1>
      <h1 className="text-tertiary text-4xl font-semibold">K</h1>
    </div>
  );
}

export default Header;
