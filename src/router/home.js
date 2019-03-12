import React from 'react'
import HeaderView from '../header'
import ExperienceView from '../experience'
import PortfolioView from '../portfolio'
import SkillsView from '../skills'
import SeparatorAbout from '../shared-components/separator-about'

export default class HomePageView extends React.Component {
    render() {
        return (
            <div >
                <HeaderView />
                <ExperienceView />
                <PortfolioView />
                <SkillsView />
                <SeparatorAbout />
            </div>
        )
    }
}