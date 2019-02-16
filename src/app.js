import React from 'react'
import { Route } from 'react-router-dom'
import AboutPageView from './router/about'
import HomePageView from './router/home'
import NavView from '../src/navigation'
import FooterView from '../src/footer'

class App extends React.Component {
    render() {
        return (
            <div className="page bg-main">
                <NavView />
                <Route path="/" exact={true} component={HomePageView} />
                <Route path="/about" exact={true} component={AboutPageView} />
                <FooterView />
            </div>
        )
    }
}

export default App