import React from 'react'
import PropTypes from 'prop-types'

export default class SectionTitle extends React.Component {
    render() {
        const sectionTitleStyle = {
            margin: "65px 0 10px 0px",
            fontSize: "1.7em",
            textAlign: "center",
        }

        return (
            <h3
                className="section-title"
                style={sectionTitleStyle}>
            </h3 >
        )
    }
}

SectionTitle.propTypes = {
    text: PropTypes.string,
}

SectionTitle.defaultProps = {
    text: ''
}