import React from 'react'
import Logobar from './Logobar'

function Footer() {
  return (
    <div className='foooter'>
      <div className='footer'>
      <div className='im'>
        <img src="/footerim.png" />
      </div>
      <div className='firstline'>
        <h1>
            premiere league
      </h1>
      <div className='section'><div className='line1'>
        <a href='#'>home</a>
        <a href='#'>fixtures</a>
        <a href='#'>result</a>
      </div>
      <div className='line2'>
        <a href='#'>tables</a>
        <a href='#'>stats</a>
        <a href='#'>news</a>
      </div>
      <div className='line3'>
        <a href='#'>video</a>
        <a href='#'>watch live</a>
        <a href='#'>clubs</a>
      </div>
      <div className='line4'>
        <a href='#'>players</a>
        <a href='#'>transfers</a>
        <a href='#'>awards</a>
      </div>
      </div></div>
      <div >
        <h1>
            social
      </h1>
      <div className='section'>
      <div className='line5'>
        <a href='#'>youTube</a>
        <a href='#'>tik tok</a>
        <a href='#'>facebook</a>
      </div>
      <div className='line6'>
        <a href='#'>twitter</a>
        <a href='#'>instgram</a>
        <a href='#'>spotify</a>
        </div>
      </div>
      </div>
      <div>

      </div>
        <img src='/bac.png'className='bac'/>
        <img src='/back.png'className='back'/>

      </div>
      <Logobar/>
      < hr class="border-light" id="hr"/>
      <div className='fin'>
    <p  >© premier league 2023 </p>
<p className="terms">
  <span>terms & conditions</span>
  <span>policies</span>
  <span>cookie</span>
  <span>equality.diversity and inclusion standard</span>
  <span>modern slavery statement</span>
</p>    </div>
    
    </div>
  )
}

export default Footer
