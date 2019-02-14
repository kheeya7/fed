import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.Component {
    render() {
        const titleStyle = {
            margin: "12px",
            fontSize: "58px",
            textAlign: "center",
        }

        return (
            <h2 style={titleStyle}>
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