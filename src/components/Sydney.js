import React, { useRef, useState, useEffect } from 'react'
import '../css/Sydney.css'
//images import
import bridge from '../assets/sydney/bridge.png'
import city_back from '../assets/sydney/city_back.png'
import city_first from '../assets/sydney/city_first.png'
import dune from '../assets/sydney/dune.png'
import kangourou from '../assets/sydney/kangourou.png'
import opera from '../assets/sydney/opera.png'
import palm from '../assets/sydney/palm.png'
import sun from '../assets/sydney/sun.png'
import plane from '../assets/sydney/plane.png'
import ait_logo from '../assets/general/ait_logo.png'

function Sydney() {
  const [offset, setOffset] = useState(0)
  const sun_parallax = useRef()
  const plane_parallax = useRef()
  const dune_parallax = useRef()
  const city_back_parallax = useRef()
  const city_first_parallax = useRef()
  const opera_parallax = useRef()
  const kangourou_parallax = useRef()
  const palm_parallax = useRef()
  const bridge_parallax = useRef()
  const ait_logo_parallax = useRef()
  const title_parallax = useRef()
  const title2_parallax = useRef()

  useEffect(() => {
    //set the offset of the parallax

    if (offset <= 1242) {
      //plane parameters
      plane_parallax.current.style.top = -1080 + offset * 1.2 + 'px'
      plane_parallax.current.style.right = -1500 + offset * 1.6 + 'px'
      //sun parameters
      sun_parallax.current.style.top = -720 + offset * 0.8 + 'px'
      //dune parameters
      dune_parallax.current.style.top = -550 + offset * 0.7 + 'px'
      //city parameters
      city_back_parallax.current.style.top = 220 + offset * 0.2 + 'px'
      city_first_parallax.current.style.top = 120 + offset * 0.4 + 'px'
      //opera parameters
      opera_parallax.current.style.bottom = -1090 + offset * 1 + 'px'
      //bridge parameters
      bridge_parallax.current.style.bottom = -2950 + offset * 2.5 + 'px'
      //kangourou parameters
      kangourou_parallax.current.style.left = -1070 + offset * 1 + 'px'
      //palm parameters
      palm_parallax.current.style.right = -1060 + offset * 1 + 'px'
      //ait logo parameters
      ait_logo_parallax.current.style.left = -1030 + offset * 1 + 'px'
      ait_logo_parallax.current.style.top = -1310 + offset * 1.2 + 'px'
      //title parameters
      title_parallax.current.style.top = -1370 + offset * 1.2 + 'px'
      title2_parallax.current.style.top = -1300 + offset * 1.2 + 'px'
    }

    const onScroll = () => {
      setOffset(window.pageYOffset)
    }
    // clean up code
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  console.log(offset)
  return (
    <>
      <div className="sydney">
        <img src={plane} ref={plane_parallax} className="plane" alt="plane" />
        <img src={sun} ref={sun_parallax} className="sun" alt="sun" />
        <img src={dune} ref={dune_parallax} className="dune" alt="dune" />
        <img
          src={city_back}
          ref={city_back_parallax}
          className="city_back"
          alt="city_back"
        />
        <img
          src={city_first}
          ref={city_first_parallax}
          className="city_first"
          alt="city_first"
        />
        <img src={opera} className="opera" ref={opera_parallax} alt="opera" />
        <img
          src={bridge}
          className="bridge"
          ref={bridge_parallax}
          alt="bridge"
        />
        <img
          src={kangourou}
          className="kangourou"
          ref={kangourou_parallax}
          alt="kangourou"
        />

        <img src={palm} className="palm" ref={palm_parallax} alt="palm" />
        <img
          src={ait_logo}
          className="ait_logo"
          ref={ait_logo_parallax}
          alt="ait_logo"
        />
        <p className="sydney_area_title" ref={title_parallax}>
          2019-2022 Bachelor of
        </p>
        <p className="sydney_area_title" ref={title2_parallax}>
          Mobile App Development
        </p>
        <div className="ground"></div>
      </div>
    </>
  )
}

export default Sydney
