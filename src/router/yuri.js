import React from 'react';
import YuriView from '../project-detail/yuri';
import SeparatorContact from '../shared-components/separator-contact';

export default class YuriPageView extends React.PureComponent {
  render() {
    return (
            <div>
                <YuriView />
                <SeparatorContact />
            </div>
    );
  }
}
