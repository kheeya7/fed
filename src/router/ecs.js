import React from 'react'
import EcsView from "../project-detail/ecs";
import SeparatorContact from '../shared-components/separator-contact'

export default class EcsPageView extends React.Component {
    render() {
        return (
            <div>
                <EcsView />
                <SeparatorContact />
            </div>
        )
    }
}