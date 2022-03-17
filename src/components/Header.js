import React, { useEffect, useState, useRef } from 'react'
//css
import '../css/Header.css'
//images import
import cloud_top_left from '../assets/first_landscape/cloud_top_left.png'
import cloud_top_right from '../assets/first_landscape/cloud_top_right.png'
import cloud_bottom_left from '../assets/first_landscape/cloud_bottom_left.png'
import cloud_bottom_right from '../assets/first_landscape/cloud_bottom_right.png'
import mountain_central from '../assets/first_landscape/mountain_central.png'
import mountain_left_and_right from '../assets/first_landscape/mountain_left_and_right.png'
import three_back from '../assets/first_landscape/three_back.png'
import three_side from '../assets/first_landscape/three_side.png'
import grass from '../assets/first_landscape/grass.png'
import three_first from '../assets/first_landscape/three_first.png'
import plane from '../assets/first_landscape/plane.png'

function Header() {
  const [offset, setOffset] = useState(0)
  //UseRef to define the object with parallax
  const left_top_cloud_parallax = useRef()
  const right_top_cloud_parallax = useRef()
  const left_bottom_cloud_parallax = useRef()
  const right_bottom_cloud_parallax = useRef()
  const mountain_central_parallax = useRef()
  const mountain_left_and_right_parallax = useRef()
  const three_back_parallax = useRef()
  const three_side_parallax = useRef()
  const grass_parallax = useRef()
  const three_first_parallax = useRef()
  const second_section = useRef()
  const title_parallax = useRef()
  const title_parallax_2 = useRef()
  const flag_parallax = useRef()
  const plane_parallax = useRef()

  useEffect(() => {
    //set the offset of the parallax
    //plane parameters
    plane_parallax.current.style.top = 360 + offset * 0.5 + 'px'
    plane_parallax.current.style.left = 850 + offset * 1.5 + 'px'
    //Clouds parameters
    left_top_cloud_parallax.current.style.top = 35 - offset * -1 + 'px'
    left_top_cloud_parallax.current.style.left = 85 + offset * -0.8 + 'px'
    left_bottom_cloud_parallax.current.style.top = 400 - offset * -1 + 'px'
    left_bottom_cloud_parallax.current.style.left = 160 + offset * -0.8 + 'px'
    right_top_cloud_parallax.current.style.top = 115 - offset * -1 + 'px'
    right_top_cloud_parallax.current.style.right = 450 + offset * -0.8 + 'px'
    right_bottom_cloud_parallax.current.style.top = 280 - offset * -1 + 'px'
    right_bottom_cloud_parallax.current.style.right = 25 + offset * -0.8 + 'px'
    //Mountain parameters
    mountain_central_parallax.current.style.bottom = 100 + offset * -1.5 + 'px'
    mountain_left_and_right_parallax.current.style.bottom =
      55 + offset * -1 + 'px'
    //Three parameters
    three_back_parallax.current.style.bottom = -20 + offset * -0.8 + 'px'
    three_side_parallax.current.style.bottom = -20 + offset * -0.5 + 'px'
    three_first_parallax.current.style.bottom = -20 + offset * -0.3 + 'px'
    //Grass parameters
    grass_parallax.current.style.bottom = -70 + offset * -0.7 + 'px'
    //Title parameters
    title_parallax.current.style.top = offset * 3 + 'px'
    title_parallax_2.current.style.top = offset * 3 + 'px'
    //flag_parallax
    flag_parallax.current.style.top = 200 + offset * 1.5 + 'px'

    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return (
    <>
      <div className="first_landscape_background">
        <img src={plane} ref={plane_parallax} alt="plane" className="plane" />
        <img
          src={cloud_top_left}
          ref={left_top_cloud_parallax}
          className="first_landscape_cloud_top_left"
          alt="cloud"
        />
        <img
          src={cloud_top_right}
          ref={right_top_cloud_parallax}
          className="first_landscape_cloud_top_right"
          alt="cloud"
        />
        <img
          src={cloud_bottom_left}
          ref={left_bottom_cloud_parallax}
          className="first_landscape_cloud_bottom_left"
          alt="cloud"
        />
        <img
          src={cloud_bottom_right}
          ref={right_bottom_cloud_parallax}
          className="first_landscape_cloud_bottom_right"
          alt="cloud"
        />
        <div className="wrapper" ref={flag_parallax}>
          <div className="stick"></div>
          <div className="flag">
            <div className="left"></div>
            <div className="middle"></div>
            <div className="right"></div>
          </div>
        </div>
        <img
          src={mountain_central}
          ref={mountain_central_parallax}
          className="first_landscape_mountain_central"
          alt="mountain"
        />
        <h1 className="title" ref={title_parallax}>
          Florian Jourdain
        </h1>
        <h1 className="title" ref={title_parallax_2}>
          Website
        </h1>
        <img
          src={mountain_left_and_right}
          ref={mountain_left_and_right_parallax}
          className="first_landscape_mountain_left_and_right"
          alt="mountains"
        />
        <img
          src={three_back}
          ref={three_back_parallax}
          className="first_landscape_three_back"
          alt="threes"
        />
        <img
          src={three_side}
          ref={three_side_parallax}
          className="first_landscape_three_side"
          alt="threes"
        />
        <img
          src={grass}
          ref={grass_parallax}
          className="first_landscape_grass"
          alt="grass"
        />
        <img
          src={three_first}
          ref={three_first_parallax}
          className="first_landscape_three_first"
          alt="threes"
        />
      </div>
      <div className="next_content" ref={second_section}>
        <p>
          As you can see my name is Florian Jourdain. Born in France in 1984 and
          moved in Australia end of 2018.
        </p>
        <p>
          In April 2019 I've started my journey in the development world with
          the beginning of my Bachelor degree in Mobile App development in AIT
          (Academy of Information Technology).
        </p>
        <p>
          In 2022 I will be graduated and ready to start a new chapter as a
          professional developer.
        </p>
      </div>
    </>
  )
}

export default Header
