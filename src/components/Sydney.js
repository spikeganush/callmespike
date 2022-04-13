import React, { useRef, useState, useEffect } from 'react'
import '../css/Sydney.css'
//images import
import ait_logo from '../assets/general/ait_logo.png'

function Sydney() {
  const [offset, setOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState()
  let path
  if (windowWidth > 820) {
    path = '../assets/sydney/desktop/'
  } else {
    path = '../assets/sydney/mobile/'
  }
  //images
  const bridge = path + 'bridge.png'
  const city_back = path + 'city_back.png'
  const city_first = path + 'city_first.png'
  const dune = path + 'dune.png'
  const kangourou = path + 'kangourou.png'
  const opera = path + 'opera.png'
  const palm = path + 'palm.png'
  const sun = path + 'sun.png'
  const plane = path + 'plane.png'
  const title_parallax = useRef()
  const title2_parallax = useRef()

  const ParallaxImage = ({
    image,
    classInfo,
    reference,
    translateX,
    translateY,
  }) => {
    if (windowWidth < 400) {
      if (offset <= 1200) {
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
      } else {
        return (
          <img
            src={image}
            className={classInfo}
            ref={reference}
            style={{
              transform: `translateY(${1200 * translateY}px)
               translateX(${1200 * translateX}px)`,
            }}
            alt="parallax"
          />
        )
      }
    } else {
      if (offset <= 1300) {
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
      } else {
        return (
          <img
            src={image}
            className={classInfo}
            ref={reference}
            style={{
              transform: `translateY(${1300 * translateY}px)
             translateX(${1300 * translateX}px)`,
            }}
            alt="parallax"
          />
        )
      }
    }
  }

  useEffect(() => {
    //set the offset of the parallax
    setWindowWidth(window.innerWidth)
    if (windowWidth < 400) {
      if (offset <= 1200) {
        //title parameters
        title_parallax.current.style.transform = `translateY(${offset * 1.2}px)`
        title2_parallax.current.style.transform = `translateY(${
          offset * 1.2
        }px)`
      }
    } else {
      if (offset <= 1242) {
        //title parameters
        title_parallax.current.style.transform = `translateY(${offset * 1.2}px)`
        title2_parallax.current.style.transform = `translateY(${
          offset * 1.2
        }px)`
      }
    }

    const onScroll = () => {
      setOffset(window.pageYOffset)
    }
    // clean up code
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset, windowWidth])

  return (
    <>
      <div className="sydney">
        <ParallaxImage
          classInfo="plane_sydney"
          image={plane}
          translateY={0.5}
          translateX={-1}
        />
        <ParallaxImage
          classInfo="sun"
          image={sun}
          translateY={-0.8}
          translateX={0}
        />
        <ParallaxImage
          classInfo="dune"
          image={dune}
          translateY={-0.7}
          translateX={0}
        />
        <ParallaxImage
          classInfo="city_back"
          image={city_back}
          translateY={-0.2}
          translateX={0}
        />
        <ParallaxImage
          classInfo="city_first"
          image={city_first}
          translateY={-0.4}
          translateX={0}
        />
        <ParallaxImage
          classInfo="opera"
          image={opera}
          translateY={-1}
          translateX={0}
        />
        <ParallaxImage
          classInfo="bridge"
          image={bridge}
          translateY={-2.5}
          translateX={0}
        />
        <ParallaxImage
          classInfo="kangourou"
          image={kangourou}
          translateY={0}
          translateX={1}
        />
        <ParallaxImage
          classInfo="palm"
          image={palm}
          translateY={0}
          translateX={-1}
        />
        <ParallaxImage
          classInfo="ait_logo"
          image={ait_logo}
          translateY={1.2}
          translateX={1.2}
        />
        <p className="sydney_area_title" ref={title_parallax}>
          2019-2022 Bachelor of
        </p>
        <p className="sydney_area_title2" ref={title2_parallax}>
          Mobile App Development
        </p>
        <div className="ground"></div>
      </div>
    </>
  )
}

export default Sydney
