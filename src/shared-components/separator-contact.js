import React from 'react'
import Separator from './separator'

export default class SeparatorContact extends React.PureComponent {
    render() {
        return (
            <Separator>
                <a href="mailto:kheeya7@hotmail.com">
                    Contact Kate <i className="fa fa-angle-right"></i>
                </a>
            </Separator>
        )
    }
}

