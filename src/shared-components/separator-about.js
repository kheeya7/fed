import React from 'react'

export default class SeparatorAbout extends React.Component {
    render() {
        return (
            <div className="bg-main pad-5 separator">
                <h2 className="text-center">
                    <a onClick={() => this.props.onSelectedNavClicked('about')}>
                        About Kate <i className="fa fa fa-angle-right"></i>
                    </a>
                </h2>
            </div>
        )
    }
}

