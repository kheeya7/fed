import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageView from './router/home'
import AboutPageView from './router/about'
import NavView from '../src/navigation'
import FooterView from '../src/footer'

const App = (props) => {
  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     window.scrollTo(0, 0);
  //   }
  // }

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
      <Routes>
        <Route path="/" exact={true} element={<HomePageView />} />
        <Route path="/about" exact={true} element={<AboutPageView />} />
        <Route path="/project-detail/unify" exact={true} element={<UnifyPageView />} />
        <Route path="/project-detail/ecs" exact={true} element={<EcsPageView />} />
        <Route path="/project-detail/stronger" exact={true} element={<StrongerPageView />} />
        <Route path="/project-detail/pocket" exact={true} element={<PocketPageView />} />
        <Route path="/project-detail/yuri" exact={true} element={<YuriPageView />} />
      </Routes>
      <FooterView />
    </div>
  )
}


export default App;
