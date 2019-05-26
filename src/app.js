import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import AboutPageView from './router/about';
import HomePageView from './router/home';
import UnifyPageView from './router/unify';
import EcsPageView from './router/ecs';
import StrongerPageView from './router/stronger';
import PocketPageView from './router/pocket';
import YuriPageView from './router/yuri';
import NavView from './navigation';
import FooterView from './footer';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
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
    );
  }
}

export default withRouter(App);
