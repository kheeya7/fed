import React from 'react';

export default class Separator extends React.PureComponent {
  render() {
    return (
      <div className="bg-main pad-5 separator">
        <h2 className="text-center">
          {this.props.children}
        </h2>
      </div>
    );
  }
}
