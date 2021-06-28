import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Title from './Title/Title';
import Divider from './Divider/Divider';
import './_contact.scss';

const Contact = () => {
    return(
        <> 
        <section id="contact">
            <div className="contact__wrapper">
                <Title text="Skotaktuj się z nami" />
                <Divider />
                <ContactForm />
            </div>
        </section>
        </>
    )
}

export default Contact;