import React from 'react';
import './_button.scss';

const PushButton = (props) => {
    return(
        <>
        <button className="button">
            {props.firstSegment}<br/>
            {props.secondSegment}
        </button>
        </>
    )
}

export default PushButton;