import React from 'react';
import {ReactComponent as ImageDivider} from './Decoration.svg';
import "./_divider.scss";

const Divider = () => {
        return(
            <div className="divider__container">
                <ImageDivider />
            </div>
        )
    }

export default Divider;