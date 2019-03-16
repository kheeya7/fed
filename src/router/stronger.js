import React from 'react'
import StrongerView from "../project-detail/stronger";
import SeparatorContact from '../shared-components/separator-contact'

export default class StrongerPageView extends React.Component {
    render() {
        return (
            <div>
                <StrongerView />
                <SeparatorContact />
            </div>
        )
    }
}