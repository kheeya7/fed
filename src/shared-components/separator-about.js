import React from 'react';
import { Link } from 'react-router-dom';
import Separator from './separator';

export default class SeparatorAbout extends React.PureComponent {
  render() {
    return (
            <Separator>
                <Link to="/about">
                    About Kate <i className="fa fa-angle-right"></i>
                </Link>
            </Separator>
    );
  }
}
