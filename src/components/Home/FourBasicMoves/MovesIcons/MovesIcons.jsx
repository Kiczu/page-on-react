import React from 'react';
import './_movesIcons.scss';

const MovesIcons = ({icon, title, description}) => {
    return(
        <>
            <div className="moves__element">
                <div className="moves__element__icon">
                    <img src={icon} alt="" />
                </div>
                <div className="moves__element__title">
                    <p>{title}</p>
                </div>
                <div className="moves__element__separator">
                </div>
                <div className="moves__element__description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default MovesIcons;