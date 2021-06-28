import React from 'react';
import Divider from '../Divider/Divider';
import Title from '../Title/Title';
import PushButton from '../Button/Button';
import MovesIcons from './MovesIcons/MovesIcons';
import Icon1 from './Icon-1.svg';
import Icon2 from './Icon-2.svg';
import Icon3 from './Icon-3.svg';
import Icon4 from './Icon-4.svg';

import "./_fourBasicMoves.scss";

const FourBasicMoves = () => {
        return(
            <>
                <section id="wgo" className="fourBasicMoves">
                    <Title text="Wystarczą 4 proste kroki" />
                    <Divider />
                    <div className="moves">
                        <div className="moves__container">
                            <MovesIcons
                            icon= {Icon1}
                            title="Wybierz rzeczy"
                            description="ubrania, zabawki, sprzęt i inne"
                            />
                            <MovesIcons
                            icon= {Icon2}
                            title="Spakuj je"
                            description="skorzystaj z worków na śmieci"
                            />
                            <MovesIcons
                            icon= {Icon3}
                            title="Zdecyduj komu chcesz pomóc"
                            description="wybierz zaufane miejsce"
                            />
                            <MovesIcons
                            icon= {Icon4}
                            title="Zamów kuriera"
                            description="kurier przyjedzie w dogodnym terminie"
                            />
                        </div>
                    </div>
                    <PushButton 
                        firstSegment="Oddaj"
                        secondSegment="rzeczy"
                    />
                </section>
            </>
        )
    }

export default FourBasicMoves;