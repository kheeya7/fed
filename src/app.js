import React from 'react'
import HeaderView from '../src/header'
import NavView from '../src/navigation'
import FeaturedView from '../src/featured'
import SkillsView from '../src/skills'
import FooterView from '../src/footer'
import AboutView from '../src/about'
import SeparatorAbout from '../src/shared-components/separator-about'
import SeparatorContact from '../src/shared-components/separator-contact'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedNav: 'main',
        };

        this.onSelectedNavClicked = this.onSelectedNavClicked.bind(this)
    }

    onSelectedNavClicked(newSelectedNav) {
        this.setState({
            selectedNav: newSelectedNav,
        });
    }

    render() {
        if (this.state.selectedNav === 'main') {
            return (
                <div className="page bg-main">
                    <NavView onSelectedNavClicked={this.onSelectedNavClicked} />
                    <HeaderView />
                    <FeaturedView />
                    <SkillsView />
                    <SeparatorAbout onSelectedNavClicked={this.onSelectedNavClicked} />
                    <FooterView onSelectedNavClicked={this.onSelectedNavClicked} />
                </div>
            )
        } else if (this.state.selectedNav === 'about') {
            return (
                <div className="page bg-main">
                    <NavView onSelectedNavClicked={this.onSelectedNavClicked} />
                    <AboutView />
                    <SeparatorContact />
                    <FooterView onSelectedNavClicked={this.onSelectedNavClicked} />
                </div>
            )
        }
        // else if (this.state.selectedNav === 'projects') {
        //     return (
        //         <div>
        //             <NavView onSelectedNavClicked={this.onSelectedNavClicked} />
        //             <ProjectsView />
        //             <FooterView onSelectedNavClicked={this.onSelectedNavClicked} />
        //         </div>
        //     )
        // }
    }
}

export default App