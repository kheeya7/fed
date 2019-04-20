import React from 'react'
import HeaderView from '../header'
import ExperienceView from '../experience'
import PortfolioView from '../portfolio'
import SkillsView from '../skills'
import WithmeView from '../withme'
import SeparatorAbout from '../shared-components/separator-about'

export default class HomePageView extends React.PureComponent {
    render() {
        return (
            <div >
                <HeaderView />
                <ExperienceView />
                <PortfolioView />
                <SkillsView />
                <WithmeView />
                <SeparatorAbout />
            </div>
        )
    }
}