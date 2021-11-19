import React from 'react'
import HeaderView from '../header'
import ExperienceView from '../experience'
import PortfolioView from '../portfolio'
import SkillsView from '../skills'
import WithmeView from '../withme'
import SeparatorAbout from '../shared-components/separator-about'

const HomePageView = () => {
    return (
        <div >
            <HeaderView />
            <PortfolioView />
            <ExperienceView />
            <SkillsView />
            <WithmeView />
            <SeparatorAbout />
        </div>
    );
}

export default HomePageView;