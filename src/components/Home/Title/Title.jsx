import React, {Component} from 'react';
import './_title.scss';

class Title extends Component {
    render() {
        return(
            <>
                <h1 className="title">
                    {this.props.text}<br />{this.props.brokenText}
                </h1>
            </>
        )
    }
}

export default Title;