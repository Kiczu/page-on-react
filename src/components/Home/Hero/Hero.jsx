import React from 'react';
import Divider from '../Divider/Divider';
import Title from '../Title/Title';
import PushButton from '../Button/Button';
import "./_hero.scss";

const Hero = () => {
        return(
            <>
                <header id="hero" className="hero">
                    <div className="hero__image">
                    </div>
                    <div className="hero__info">
                        <Title text="Zacznij pomagać!" brokenText="Oddaj niechciane rzeczy w zaufane ręce" />
                        <Divider />
                        <div className="hero__buttons">
                            <PushButton 
                                firstSegment="Oddaj"
                                secondSegment="rzeczy"
                            />
                            <PushButton 
                                firstSegment="Zorganizuj"
                                secondSegment="zbiórkę"
                            />
                        </div>
                    </div>
                </header>
            </>
        )
    }

export default Hero;