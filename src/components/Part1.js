// import React from 'react'
// import React, { useState } from 'react';
import { useState, useRef } from "react";
// import { useRef } from "react";


function Part1() {
  const isDragging = useRef(false);
const startX = useRef(0);
 const [index, setIndex] = useState(0);

  const cardWidth = 280;
const [open, setOpen] = useState(true);   let video=[
  {
    // 1
    img:"/player1.png",
    src:"https://www.youtube.com/embed/QOHgcL02m2c?si=tiHG23FfPmMhavrV",
    match:"WHU",
    logo:"https://tse3.mm.bing.net/th/id/OIP.rx-J4GEMqjTJC_t5FsSu-gHaEo?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3",
    score:"2-2",
    im:"https://clipground.com/images/wolverhampton-wanderers-logo-clipart.png",
    vs:'WOL',
    name:'Gianluca Scamacca',
    p:"'35"
  },
   {
    // 2
    img:"https://i.pinimg.com/736x/e7/44/3f/e7443fd771c52cda9ce1de7d472c1fcf.jpg",
    src:"https://www.youtube.com/embed/pZDkJjrs7Wg?si=eEkLJPJ_ptfoNMMC" ,
    match:"CHE",
    logo:"https://cdn.freebiesupply.com/logos/large/2x/chelsea-fc-2-logo-png-transparent.png",
    score:"1-1",
    im:"https://content.invisioncic.com/Msigames/monthly_2024_01/Everton_FC_logo_svg.png.4ea5ec006e45a6d127dc79933c165ee7.png",
    vs:'EVE',
    name:'Wesley Fodana',
        p:"'81"


  },
   {
    // 3
    img:"https://i.pinimg.com/1200x/58/91/ea/5891ea74a7302ac79d6b885398f2e90b.jpg",
    src:"https://www.youtube.com/embed/XcdBwQDw4fg?si=aE3R6_EuLKM8mvkU",
   match:"TOL",
    logo:"https://cdn.freelogovectors.net/wp-content/uploads/2018/03/tottenham-hotspur-football-club-logo.png",
    score:"2-2",
    im:"https://clipground.com/images/wolverhampton-wanderers-logo-clipart.png",
    vs:'WOL',
    name:"Pedro Porro",
        p:"'43"


  } ,
  {
    // 4
    img: "https://i.pinimg.com/736x/3a/a4/9b/3aa49b294f6b319eb6ef47005eb71198.jpg",
  src: "https://www.youtube.com/embed/T7Vk4sjuj5Q?si=IJltMp4KqUj-4O0a",
 match:"MCI",
    logo:"https://tse3.mm.bing.net/th/id/OIP.HFsJ1xjb-FXQRDyRlwIxOwHaEK?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3",
    score:"2-1",
    im:"https://tse2.mm.bing.net/th/id/OIP.2Q42LaXND7V_CA3PY0KIzgHaHa?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3",
    vs:'ARS',
  name: "Erling Haaland",
p:"'90"
},
];
   // 🔁 infinite next
  const next = () => {
    setIndex((prev) => (prev + 1) % video.length);
  };

  // 🔁 infinite prev
  const prev = () => {
    setIndex((prev) => (prev - 1 + video.length) % video.length);
    // 🖱 drag start
  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };}

  // 🖱 drag move (optional smooth)
  const handleMove = (e) => {
    if (!isDragging.current) return;
  };

  // 🖱 drag end
  const handleEnd = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;

    if (diff > 50) {
      prev(); // swipe right
    } else if (diff < -50) {
      next(); // swipe left
    }

    isDragging.current = false;
  };
const loopVideo = [...video, ...video];
  return (
    <>
    <div className='section'>
    <div className='part1'>
      <h6>2023-2024 SEASON</h6>
      <h1>Featured goals</h1>
      <p>See the most breathtaking and key goals of the current Premier League Seasom</p>
      <button className='btn'>More goals</button><br/>
 <button className="arrow" onClick={prev}>⬅</button>
        <button className="arrow" onClick={next}>➡</button>
    </div>
<div className='viewport'>

{/* </div> */}
    <div className='carousel-track lescard'>
    {video.map((el, i) => (
      <div className="sugg" key={i}>
            {/*  CARD 1 (IMAGE) */}
      <div className="card1 img-card" style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}>
        {/* <div className="slider" ref={sliderRef} onScroll={handleScroll}>
  {infiniteLogos.map((logo, i) => (
    <img key={i} src={logo} alt="logo" />
  ))}
</div> */}
        <img src={el.img} className="profil" alt="" />

        <div className="info">
         <h6>{el.name}</h6>
          <div className="timing-box">
            <img src="https://i.pinimg.com/736x/8b/97/9a/8b979a9dead9cbc7301101e8e22ec78a.jpg"/>
            <p>{el.p}</p>
          </div>
        </div>
        <div className="top-line"></div> 
      </div>

      {/*  CARD 2 (VIDEO) */}
      <div className="card2 video-card" style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}>
        <iframe
          width="100%"
          height="180"
          src={el.src}
          title="video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
          <div className="teams">
            <span>{el.match}</span>
            <img src={el.logo} alt="" />
            <span>{el.score}</span>
            <img src={el.im} alt="" />
            <span>{el.vs}</span>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div> 
</>
  );
}

export default Part1
 