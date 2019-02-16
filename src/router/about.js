import React from 'react'
import AboutView from '../about'
import SeparatorContact from '../shared-components/separator-contact'

export default class AboutPageView extends React.Component {
    render() {
        return (
            <div>
                <AboutView />
                <SeparatorContact />
            </div>
        )
    }
}