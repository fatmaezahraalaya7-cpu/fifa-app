import React from 'react'
const logos = [
    { name: 'arsenal', src: 'https://www.brandcolorcode.com/media/arsenal-logo.png' },
    { name: 'astron', src: 'Aston-Villa.png' },
    { name: 'foot', src: 'https://preview.redd.it/tava-sem-nada-pra-fazer-e-resolvi-desenhar-os-escudos-da-v0-dt62diabcnae1.png?width=640&crop=smart&auto=webp&s=0f9a54ba9c5eb359b63080872493d1398c178adc' },
    { name: "foot", src:'https://preview.redd.it/tava-sem-nada-pra-fazer-e-resolvi-desenhar-os-escudos-da-v0-e0omehabcnae1.png?width=640&crop=smart&auto=webp&s=1a11d9d05ab9109a87fbb6730ed6f3c4f283a43b'},
    { name: "aleion", src:'https://preview.redd.it/tava-sem-nada-pra-fazer-e-resolvi-desenhar-os-escudos-da-v0-1tzlthabcnae1.png?width=640&crop=smart&auto=webp&s=2f038338dcad1a6cb79c6cb0041bd3d5ed9d21ca' },
    { name: "football", src: 'https://preview.redd.it/tava-sem-nada-pra-fazer-e-resolvi-desenhar-os-escudos-da-v0-ihdbtgabcnae1.png?width=640&crop=smart&auto=webp&s=d0288aa977dc71d0685c484c7aeebde8634267ca' },
    { name: "..", src: 'https://preview.redd.it/tava-sem-nada-pra-fazer-e-resolvi-desenhar-os-escudos-da-v0-r8vubhabcnae1.png?width=640&crop=smart&auto=webp&s=920580d32b9d8f7c8f52739a278bfc0b77619a18' },
    { name: "tol", src: 'https://cdn.freelogovectors.net/wp-content/uploads/2018/03/tottenham-hotspur-football-club-logo.png' },
    { name: "eve", src: 'https://content.invisioncic.com/Msigames/monthly_2024_01/Everton_FC_logo_svg.png.4ea5ec006e45a6d127dc79933c165ee7.png' },
    { name: "ffc", src: 'https://kassiesa.net/uefa/clubs/images/Fulham-FC.png' },
    { name: "leed", src: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/012012/untitled-1_147.png?itok=7wcg3vXX' },
    { name: "mci", src: 'https://tse3.mm.bing.net/th/id/OIP.HFsJ1xjb-FXQRDyRlwIxOwHaEK?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3' },
   
];
function Logobar() {
    const infiniteLogos = [...logos, ...logos];
  return (
      <div className="logo-container">
          <div className="logo">
              {infiniteLogos.map((logo, el) => (
                  <img
                      el={el}
                      src={logo.src}
                      alt={logo.name}
                      className="img-logo"
                  />
              ))}
          </div>
      </div>
  )
}

export default Logobar