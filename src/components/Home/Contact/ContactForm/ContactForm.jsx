import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './_contactForm.scss';

function ContactForm() {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Podane imię jest nieprawidłowe!'),
        email: Yup.string()
            .required('Podany email jest nieprawidłowy')
            .email('Podany email jest nieprawidłowy!'),
        message: Yup.string()
            .required('Wiadomość musi mieć conajmniej 120 znaków!')
            .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit() {
        const succes = document.querySelector(".succes-message");
        succes.innerHTML = `
        <p>Wiadomość została wysłana!</p>
        <p>Wkrótce się skontaktujemy!</p>`
        return false;
    }

    return (
            <>
                <div className="succes-message">

                </div>
                <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-2">
                            <label>Wpisz swoje imię</label>
                            <input placeholder="Krzysztof" name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="error-message">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group col-2">
                            <label>Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl" name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="error-message">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." name="message" type="text" {...register('message')} className={`form-control ${errors.message ? 'is-invalid' : ''}`} />
                            <div className="error-message">{errors.message?.message}</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">Wyślij</button>
                    </div>
                </form>
            </>
    )
}

export default ContactForm;