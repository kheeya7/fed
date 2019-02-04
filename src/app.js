import React from 'react'
import HeaderView from '../src/header'
import NavView from '../src/navigation'
import FeaturedView from '../src/featured'
import SkillsView from '../src/skills'
import FooterView from '../src/footer'

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="page bg-main">
                <NavView />
                <HeaderView />
                <FeaturedView />
                <SkillsView />
                <FooterView />
            </div>
        )
    }
}

export default App