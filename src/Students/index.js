import React from 'react'
import PropTypes from 'prop-types'
import Scores from '../Scores'

const Students = ({ students }) => {

    const composedStudents = students.map((student, index) => {
        return (
            <li key={index} className="student">
                <h3 className="name">{student.name}</h3>
                <p className="bio">{student.bio}</p>
                <Scores scores={student.scores} />
            </li>
        )
    })
    return <ul className="student">{composedStudents}</ul>
}

export default Students


Students.propTypes = {
    students : PropTypes.array
}
