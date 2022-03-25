import React, { useEffect, useState, useRef } from 'react'
//css
import '../css/Header.css'

//images import
// import cloud_top_left from '../assets/first_landscape/cloud_top_left.png'
// import cloud_top_right from '../assets/first_landscape/cloud_top_right.png'
// import cloud_bottom_left from '../assets/first_landscape/cloud_bottom_left.png'
// import cloud_bottom_right from '../assets/first_landscape/cloud_bottom_right.png'
// import mountain_central from '../assets/first_landscape/mountain_central.png'
// import mountain_left_and_right from '../assets/first_landscape/mountain_left_and_right.png'
// import tree_back from '../assets/first_landscape/tree_back.png'
// import tree_side from '../assets/first_landscape/tree_side.png'
// import grass from '../assets/first_landscape/grass.png'
// import tree_first from '../assets/first_landscape/tree_first.png'
// import plane from '../assets/first_landscape/plane.png'

function Header() {
  const [offset, setOffset] = useState(0)
  const [windowWidth, setWindowWidth] = useState()
  let path
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
      />
    )
  }

  useEffect(() => {
    //set the offset of the parallax
    setWindowWidth(window.innerWidth)
    console.log(windowWidth)

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
      <div className="first_landscape_background">
        <ParallaxImage
          classInfo="plane"
          image={plane}
          translateY={0.5}
          translateX={1.5}
        />
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
