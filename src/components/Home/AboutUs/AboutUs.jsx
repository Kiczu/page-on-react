import React from 'react';
import "./_aboutUs.scss";
import Title from './Title/Title';
import Divider from './Divider/Divider';
import Signature from './Signature.svg';

const AboutUs = () => {
    return(
        <>
            <section id="aboutUs" className="aboutUs">
                <div className="aboutUs__text">
                    <Title text="O nas" />
                    <Divider />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={Signature} />
                </div>
                <div className="aboutUs__image">
                </div>
            </section>
        </>
    )
}

export default AboutUs;