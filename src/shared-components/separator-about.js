import React from 'react'
import { Link } from 'react-router-dom'

export default class SeparatorAbout extends React.Component {
    render() {
        return (
            <div className="bg-main pad-5 separator">
                <h2 className="text-center">
                    <Link to="/about">
                        About Kate <i className="fa fa fa-angle-right"></i>
                    </Link>
                </h2>
            </div>
        )
    }
}

