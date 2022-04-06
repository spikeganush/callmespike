import React from 'react'
import '../css/Subjects.css'
import SubjectsYearOne from './SubjectsYearOne'
import SubjectsYearThree from './SubjectsYearThree'
import SubjectsYearTwo from './SubjectsYearTwo'

function Subjects() {
  return (
    <div className="subjects_container">
      <SubjectsYearOne />
      <SubjectsYearTwo />
      <SubjectsYearThree />
    </div>
  )
}

export default Subjects
