import React, { useEffect, useState, useRef } from 'react'
//css
import '../css/Header.css'

function Header() {
  const [offset, setOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState()
  const [downLink, setDownLink] = useState('#first_step')
  const [upLink, setUpLink] = useState('#beginning')
  const [countClick, setCountClick] = useState(0)
  const [screen, setScreen] = useState('')
  let path

  useEffect(() => {
    if (windowWidth > 820) {
      setScreen('desktop')
    } else {
      setScreen('mobile')
    }
  }, [windowWidth])

  if (windowWidth > 820) {
    path = '../assets/first_landscape/desktop/'
  } else {
    path = '../assets/first_landscape/mobile/'
  }

  //images
  const cloud_top_left = path + 'cloud_top_left.png'
  const cloud_top_right = path + 'cloud_top_right.png'
  const cloud_bottom_left = path + 'cloud_bottom_left.png'
  const cloud_bottom_right = path + 'cloud_bottom_right.png'
  const mountain_central = path + 'mountain_central.png'
  const mountain_left_and_right = path + 'mountain_left_and_right.png'
  const tree_back = path + 'tree_back.png'
  const tree_side = path + 'tree_side.png'
  const grass = path + 'grass.png'
  const tree_first = path + 'tree_first.png'
  const plane = path + 'plane.png'
  //useRef
  const second_section = useRef()
  const title_parallax = useRef()
  const flag_parallax = useRef()

  useEffect(() => {
    if (countClick === 0) {
      setDownLink('#first_step')
      setUpLink('#beginning')
    } else if (countClick === 1) {
      setUpLink('#beginning')
      setDownLink('#second_step')
    } else if (countClick === 2) {
      setUpLink('#first_step')
      setDownLink('#third_step')
    } else if (countClick === 3) {
      setUpLink('#second_step')
      setDownLink('#fourth_step')
    } else if (countClick === 4) {
      setUpLink('#third_step')
      setDownLink('#fifth_step')
    } else if (countClick === 5) {
      setUpLink('#fourth_step')
      setDownLink('#sixth_step')
    } else if (countClick === 6) {
      setUpLink('#fifth_step')
      setDownLink('#seventh_step')
    } else if (countClick === 7) {
      setUpLink('#sixth_step')
    }
  }, [countClick])

  const ParallaxImage = ({
    image,
    classInfo,
    reference,
    translateX,
    translateY,
  }) => {
    return (
      <img
        src={image}
        className={classInfo}
        ref={reference}
        style={{
          transform: `translateY(${offset * translateY}px)
           translateX(${offset * translateX}px)`,
        }}
        alt="parallax"
      />
    )
  }

  useEffect(() => {
    //set the offset of the parallax
    setWindowWidth(window.innerWidth)
    // console.log(offset)

    //Title parameters
    title_parallax.current.style.transform = `translateY(${offset * 3}px)`
    //flag_parallax
    flag_parallax.current.style.transform = `translateY(${offset * 1.5}px)`

    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return (
    <>
      {countClick < 7 && screen === 'desktop' && (
        <a href={downLink}>
          <div
            className="down_nav"
            onClick={() => {
              setCountClick(countClick + 1)
            }}
          ></div>
        </a>
      )}

      {countClick > 0 && screen === 'desktop' && (
        <a href={upLink}>
          <div
            className="up_nav"
            onClick={() => {
              setCountClick(countClick - 1)
            }}
          ></div>
        </a>
      )}

      <div className="first_landscape_background">
        <ParallaxImage
          classInfo="first_landscape_cloud_top_left"
          image={cloud_top_left}
          translateY={1}
          translateX={-0.8}
        />
        <ParallaxImage
          classInfo="first_landscape_cloud_top_right"
          image={cloud_top_right}
          translateY={1}
          translateX={0.8}
        />
        <ParallaxImage
          classInfo="first_landscape_cloud_bottom_left"
          image={cloud_bottom_left}
          translateY={1}
          translateX={-0.8}
        />
        <ParallaxImage
          classInfo="first_landscape_cloud_bottom_right"
          image={cloud_bottom_right}
          translateY={1}
          translateX={0.8}
        />

        <ParallaxImage
          classInfo="plane"
          image={plane}
          translateY={0.5}
          translateX={1.5}
        />
        <div className="wrapper" ref={flag_parallax}>
          <div className="stick"></div>
          <div className="flag">
            <div className="left"></div>
            <div className="middle"></div>
            <div className="right"></div>
          </div>
        </div>
        <ParallaxImage
          classInfo="first_landscape_mountain_central"
          image={mountain_central}
          translateY={1.5}
          translateX={0}
        />
        <h1 className="title" ref={title_parallax}>
          Florian Jourdain
        </h1>

        <ParallaxImage
          classInfo="first_landscape_mountain_left_and_right"
          image={mountain_left_and_right}
          translateY={1.2}
          translateX={0}
        />
        <ParallaxImage
          classInfo="first_landscape_tree_back"
          image={tree_back}
          translateY={0.8}
          translateX={0}
        />

        <ParallaxImage
          classInfo="first_landscape_tree_side"
          image={tree_side}
          translateY={0.5}
          translateX={0}
        />
        <ParallaxImage
          classInfo="first_landscape_grass"
          image={grass}
          translateY={0.7}
          translateX={0}
        />
        <ParallaxImage
          classInfo="first_landscape_tree_first"
          image={tree_first}
          translateY={0.3}
          translateX={0}
        />
      </div>
      <div className="next_content" id="first_step" ref={second_section}>
        <p>
          As you can see, my name is Florian Jourdain. Born in France in 1984
          and moved to Australia end of 2018.
        </p>
        <p>
          In April 2019, I started my journey in the developing world with the
          beginning of my Bachelor's degree in Mobile App development at AIT
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
