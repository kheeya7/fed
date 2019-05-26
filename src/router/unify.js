import React from 'react';
import UnifyView from '../project-detail/unify';
import SeparatorContact from '../shared-components/separator-contact';

export default class UnifyPageView extends React.PureComponent {
  render() {
    return (
      <div>
        <UnifyView />
        <SeparatorContact />
      </div>
    );
  }
}
