import React from 'react'
import PropTypes from 'prop-types'

export function ProjectDescription(props) {
    return (
        <h4 className="project-description">
            {props.text}
        </h4>
    )
}

ProjectDescription.propTypes = {
    text: PropTypes.string,
}

ProjectDescription.defaultProps = {
    text: '',
}