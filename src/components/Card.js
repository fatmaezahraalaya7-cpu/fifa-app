import React from 'react'

function Card() {
  return (
    <div className='endpart'>
      <div className='leftpart'>
        <h1>Premier League Leaders</h1>
        <img src='/logo.png'/>
        <p className='paara'>2023-2024 SEASON</p>
      </div>
      <div className="gallery-box-container">
        {/* CARD1 */}
	<a href="#" className="gallery-box">
		<span className="gallery-box__img-container">
			<img src="https://i.pinimg.com/736x/98/9c/39/989c39350e5365cc186fcd6dc03961c5.jpg" alt="" className="gallery-box__img"/>
		</span>
		<span className="gallery-box__text-wrapper">
			<span className="gallery-box__text">
Goals: Erling Haaland			</span>
		</span>
	</a>
{/* CART2 */}
	<a href="#" className="gallery-box">
		<span className="gallery-box__img-container">
			<img src="https://i.pinimg.com/736x/b5/c8/9b/b5c89b7bd6011bd7a90a3b3d1ebc1f8e.jpg" alt="" className="gallery-box__img"/>
		</span>
		<span className="gallery-box__text-wrapper">
			<span className="gallery-box__text">
Assists: Kevin De Bruyne 

			</span>
		</span>
	</a>
{/* CARD3 */}
	<a href="#" className="gallery-box">
		<span className="gallery-box__img-container">
			<img src="https://i.pinimg.com/1200x/63/1d/12/631d1228e45f67a230068be6b1b0ee29.jpg" alt="" className="gallery-box__img"/>
		</span>
		<span className="gallery-box__text-wrapper">
			<span className="gallery-box__text">
Clean Sheets: Ederson
			</span>
		</span>	
	</a>

	{/* <a href="#" className="gallery-box">
		<span className="gallery-box__img-container">
			<img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29849dd5ebefa406f4b6a2402ac04a6c&auto=format&fit=crop&w=550&h=850&q=0" alt="" className="gallery-box__img"/>
		</span>
		<span className="gallery-box__text-wrapper">
			<span className="gallery-box__text">
				Vero eum nostrum quasi doloribus illo fuga!
			</span>
		</span>	
	</a> */}
</div>
    </div>
  )
}

export default Card
