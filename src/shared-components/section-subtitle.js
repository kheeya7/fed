import React from 'react'
import PropTypes from 'prop-types'

export default class SectionSubtitle extends React.Component {
    render() {
        return (
            <p className="section-subtitle">
                {this.props.text}
            </p>
        )
    }
}

SectionSubtitle.propTypes = {
    text: PropTypes.string,
}

SectionSubtitle.defaultProps = {
    text: ''
}