import React from 'react';
import EcsView from '../project-detail/ecs';
import SeparatorContact from '../shared-components/separator-contact';

export default class EcsPageView extends React.PureComponent {
  render() {
    return (
      <div>
        <EcsView />
        <SeparatorContact />
      </div>
    );
  }
}
