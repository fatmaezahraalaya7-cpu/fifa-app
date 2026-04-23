import React, { useState, useEffect } from "react";

function Hero() {
  const slides = [
    {
      img: "https://i.pinimg.com/1200x/58/58/b9/5858b9195800aaa16fecfd74ab5d3be4.jpg",
      title: "Pochettino wants Caicedo",
      text: "Chelsea News",
      button: "READ MORE"
    },
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_5184,h_2916,x_0,y_0/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_th_international_web/01hf3b95tqsrkq8tpz3d.jpg",
      title: "Ruthless Villa earn first win of the season against Everton",
      text: "Premier League",
      button: "ASTON VILLA"
    },
    {
      img:"https://resources.premierleague.com/premierleague/photo/2023/02/26/d25d0ea6-3e71-48bc-b279-4aa57b7a4775/1469525402.jpg",
      title: "Big Match Coming",
      text: "Premier League",
      button: "VIEW MATCH"
    },
    {
      img: "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-08/GettyImages-2165821441.jpg?h=36d6ba9e",
      title: "End of season for Foden",
      text: "MAN CITY",
      button: "PLAYERS  "
    }
  ];

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">

      {/* slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        ></div>
      ))}

      <div className="overlay"></div>

      {/* text */}
      <div className={`hero-content ${animate ? "enter" : "exit"}`}>
        <button className="hero-btn">
          {slides[current].button}
        </button>

        <p>{slides[current].text} - 12 AUG</p>

        <h1>{slides[current].title}</h1>
      </div>

      {/* bars */}
      <div className="bars">
        {slides.map((_, i) => (
          <div key={i} className={`bar ${i === current ? "active" : ""}`}>
            <span></span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Hero;