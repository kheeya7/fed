import React from 'react'
import Separator from './separator'

export default class SeparatorContact extends React.PureComponent {
    render() {
        return (
            <Separator>
                <h2 className="text-center">
                    <a href="mailto:kheeya7@hotmail.com">
                        Contact Kate <i className="fa fa-angle-right"></i>
                    </a>
                </h2>
            </Separator>
        )
    }
}

