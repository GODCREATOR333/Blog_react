import React,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form';

function Contact() {

    const [showAlert, setShowAlert] = useState(false);
    const Alert = ({ onClose }) => (
        <div className="alert">
            <span className="submit-close" onClick={onClose} >&times;</span>
            <p>Email sent successfully !! </p>
        </div>
    );


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;

        emailjs.send('service_8fe0636', 'template_h5jdh1r', {
            from_name: name,
            from_email: email,
            message: message,
            subject: subject
        }, '7mD_7ks4HAcpbyvmO')
            .then((response) => {
                console.log('Email sent!', response);
                setIsSubmitted(true);
                setShowAlert(true);
            })
            .catch((error) => {
                console.error('There was an error sending the email:', error);
            });
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            reset();
            setIsSubmitted(false);
        }
    }, [isSubmitted, reset]);

    

    return (
        <section className='container'>
            <div id='contact' className='contact'>
            {showAlert && <Alert onClose={() => setShowAlert(false)} />}
            <h1>Say Hello 👋!</h1>
            <div className='info'>
                <h2 className='h2_info'>Let's work <br /> together !</h2>
                <p className='p_info'> <span className='info_head'>Email : </span> Haripreetham.jntuh@gmail.com <br />
                    <span className='info_head'>Contact :</span> +917013589964</p>
            </div>
            <div className='ContactForm'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='contactForm'>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    {/* Row 1 of form */}
                                    <div className='row formRow'>
                                        <div className='col-6'>
                                            <input
                                                type='text'
                                                name='name'
                                                {...register('name', {
                                                    required: { value: true, message: 'Please enter your name' },
                                                    maxLength: {
                                                        value: 30,
                                                        message: 'Please use 30 characters or less'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Name'
                                            ></input>
                                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        </div>
                                        <div className='col-6'>
                                            <input
                                                type='email'
                                                name='email'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                })}
                                                className='form-control formInput'
                                                placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                                <span className='errorMessage'>Please enter a valid email address</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 2 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <input
                                                type='text'
                                                name='subject'
                                                {...register('subject', {
                                                    required: { value: true, message: 'Please enter a subject' },
                                                    maxLength: {
                                                        value: 75,
                                                        message: 'Subject cannot exceed 75 characters'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                                <span className='errorMessage'>{errors.subject.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 3 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <textarea
                                                rows={3}
                                                name='message'
                                                {...register('message', {
                                                    required: true
                                                })}
                                                className='form-control formInput'
                                                placeholder='Message'
                                            ></textarea>
                                            {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                        </div>
                                    </div>
                                    <button className='submit-btn' type='submit'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Contact