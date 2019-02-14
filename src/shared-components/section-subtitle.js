import React from 'react'
import PropTypes from 'prop-types'

export default class SectionSubtitle extends React.Component {
    render() {
        const sectionSubtitleStyle = {
            margin: "12px",
            fontSize: "1.1em",
            textAlign: "left",
        }

        return (
            <p
                className="section-subtitle"
                style={sectionSubtitleStyle}>
                {this.props.text}</p>

        )
    }
}

SectionSubtitle.propTypes = {
    text: PropTypes.string,
}

SectionSubtitle.defaultProps = {
    text: ''
}