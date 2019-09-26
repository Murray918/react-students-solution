import React from 'react'
import PropTypes from 'prop-types'

const Scores = ({ scores }) => {
	const composedScores = scores.map((score, index) => {
		return (
			<li className="score">
				<h5>
					{score.date}
					<span>{' : '}{score.score}</span>
				</h5>
			</li>
		)
	})

	return <ul>{composedScores}</ul>
}

export default Scores

Scores.propTypes = {
	scores: PropTypes.array
}
