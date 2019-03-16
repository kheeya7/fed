import React from 'react'
import { Route } from 'react-router-dom'
import AboutPageView from './router/about'
import HomePageView from './router/home'
import UnifyPageView from './router/unify'
import EcsPageView from './router/ecs'
import StrongerPageView from './router/stronger'
import NavView from '../src/navigation'
import FooterView from '../src/footer'

class App extends React.Component {
    render() {
        return (
            <div className="page bg-main">
                <NavView />
                <Route path="/" exact={true} component={HomePageView} />
                <Route path="/about" exact={true} component={AboutPageView} />
                <Route path="/project-detail/unify" exact={true} component={UnifyPageView} />
                <Route path="/project-detail/ecs" exact={true} component={EcsPageView} />
                <Route path="/project-detail/stronger" exact={true} component={StrongerPageView} />
                <FooterView />
            </div>
        )
    }
}

export default App