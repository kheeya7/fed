import React, { lazy, Suspense } from 'react'
import { Route, withRouter } from 'react-router-dom'
import HomePageView from './router/home'
import NavView from '../src/navigation'
import FooterView from '../src/footer'

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {

    const AboutPageViewLazy = lazy(() => import('./router/about'));
    const AboutPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <AboutPageViewLazy />
        </Suspense>
      )
    }

    const UnifyPageViewLazy = lazy(() => import('./router/unify'));
    const UnifyPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <UnifyPageViewLazy />
        </Suspense>
      )
    }

    const EcsPageViewLazy = lazy(() => import('./router/ecs'));
    const EcsPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <EcsPageViewLazy />
        </Suspense>
      )
    }

    const StrongerPageViewLazy = lazy(() => import('./router/stronger'));
    const StrongerPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <StrongerPageViewLazy />
        </Suspense>
      )
    }

    const PocketPageViewLazy = lazy(() => import('./router/pocket'));
    const PocketPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <PocketPageViewLazy />
        </Suspense>
      )
    }

    const YuriPageViewLazy = lazy(() => import('./router/yuri'));
    const YuriPageView = () => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <YuriPageViewLazy />
        </Suspense>
      )
    }

    return (
      <div className="page bg-main">
        <NavView />
        <Route path="/" exact={true} component={HomePageView} />
        <Route path="/about" exact={true} component={AboutPageView} />
        <Route path="/project-detail/unify" exact={true} component={UnifyPageView} />
        <Route path="/project-detail/ecs" exact={true} component={EcsPageView} />
        <Route path="/project-detail/stronger" exact={true} component={StrongerPageView} />
        <Route path="/project-detail/pocket" exact={true} component={PocketPageView} />
        <Route path="/project-detail/yuri" exact={true} component={YuriPageView} />
        <FooterView />
      </div>
    )
  }
}

export default withRouter(App)