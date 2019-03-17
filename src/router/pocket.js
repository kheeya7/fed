import React from 'react'
import PocketView from "../project-detail/pocket";
import SeparatorContact from '../shared-components/separator-contact'

export default class PocketPageView extends React.Component {
    render() {
        return (
            <div>
                <PocketView />
                <SeparatorContact />
            </div>
        )
    }
}