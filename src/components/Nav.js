import React, { useState } from 'react'
//  import { useState } from 'react';
 function Nav() {
     const [opensearch, setOpensearch ]=
    useState(false);
  return (
    <div >
      <nav className='bg-black/40 backdrop-blur-md text-white dflex justify-between p-4 navbar'>
      
      <div className='font-bold text-xxl logo'><img src='logo.png'/></div>
      <div className='list'>
        <a href='#'>Home</a>
        <a href='#'>Fixture</a>
      <a href='#'>Results</a>
      <a href='#'>Tables</a>
      <a href='#'>clubs</a>
            <a href='#'>Starts</a>
      <a href='#'>Store</a>
      <a href='#'>PL TV</a>

      </div>
      <div>
        <div className='search'>
            <button onClick={()=>
                setOpensearch(!opensearch)}><img src='search.png'/> </button>
                {opensearch &&(
                    <input placeholder="Search player..."type="text"className='search-input'/>
                )}
        </div>
        </div>
        <button className='profile'><a href='#'><img src="light.png"/></a></button>
        {/* <button><a href='#'><img src="setiing"/></a></button> */}
    
        
</nav>
    </div>
  )
}

export default Nav
