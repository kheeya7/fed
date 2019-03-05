import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.Component {
    render() {
        return (
            <h2 className="title">
                {this.props.text}
            </h2>
        )
    }
}

Title.propTypes = {
    text: PropTypes.string,
}

Title.defaultProps = {
    text: ''
}