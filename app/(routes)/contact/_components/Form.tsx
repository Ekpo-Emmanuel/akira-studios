'use client'

import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface FormInput {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
  
const initialFormInput: FormInput = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

interface Errors {
    [key: string]: string;
}

export default function Form() {
    const router = useRouter();
    const [formInput, setFormInput] = useState<FormInput>(initialFormInput);
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormInput((prevformInput) => ({
            ...prevformInput,
            [id]: value
        }));
    
        // Skip validation for 'message' field
        if (id !== 'message') {
            validateField(id, value);
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInput((prevFormInput) => ({
          ...prevFormInput
        }));
        // Clear the subject error when user interacts with radio buttons
        setErrors((prevErrors) => ({
          ...prevErrors
        }));
      };

      const validateField = (field: string, value: string) => {
        let error = '';
        switch (field) {
            case 'firstName':
                if (!value) error = 'first name is required';
                break;
            case 'lastName':
                if (!value) error = 'last name is required';
                break;
            case 'email':
                if (!value) error = 'Email is required';
                // else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email address is invalid';
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: error
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
    
        ['firstName', 'lastName', 'email'].forEach((field) => {
            const value = formInput[field as keyof FormInput];
            if (value === null || value === undefined || value === '') {
                validateField(field as keyof FormInput, '');
                valid = false;
            } else {
                validateField(field as keyof FormInput, value as string);
            }
            if (!formInput[field as keyof FormInput]) valid = false;
        });
    
    
        if (valid) {
            setSubmitted(true);
            setIsLoading(true);
            
            
            console.log(formInput);
            // try {
            //     await new Promise((resolve) => setTimeout(resolve, 2000));
            //     const response = await axios.post('/api/contact/', formInput, {
            //         headers: { 'Content-Type': 'application/json' }
            //     });
            
            //     if (response.data.success) {
            //         console.log('Form submitted successfully:', response.data);
            //         setFormInput(initialFormInput);
            //     }
            // } catch (error) {
            //     console.error('Error sending email:', error);
            // } finally {
            //     setIsLoading(false);
            //     router.push('/thank-you');
            //     setFormInput(initialFormInput);
            // }
        }
      };
  return (
    <section className="">
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Contact us
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
      </p>
      <form className="mt-10 w-full mx-auto"  onSubmit={handleSubmit} method='POST'>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="firstName"
                id="firstName"
                className={`block py-2.5 px-0 text-[20px] rounded-none w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dak:text-white dak:border-gray-600 dak:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.firstName ? 'border-red-700' : ''}`}
                placeholder=" "
                value={formInput.firstName}
                onChange={handleInputChange}
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute text-[15px] text-gray-500 dak:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dak:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.firstName ? 'text-red-700' : ''}`}
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="lastName"
                id="lastName"
                className={`block py-2.5 px-0 text-[20px] rounded-none w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dak:text-white dak:border-gray-600 dak:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.lastName ? 'border-red-700' : ''}`}
                placeholder=" "
                value={formInput.lastName}
                onChange={handleInputChange}
            />
            <label
              htmlFor="lastName"
              className={`peer-focus:font-medium absolute text-[15px] text-gray-500 dak:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dak:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.lastName ? 'text-red-700' : ''}`}
            >
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input
                type="email"
                name="email"
                id="email"
                className={`block py-2.5 px-0 text-[20px] rounded-none w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dak:text-white dak:border-gray-600 dak:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.email ? 'border-red-700' : ''}`}
                placeholder=" "
                value={formInput.email}
                onChange={handleInputChange}
            />
          <label
            htmlFor="email"
            className={`peer-focus:font-medium absolute text-[15px] text-gray-500 dak:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dak:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.email ? 'text-red-700' : ''}`}
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            className="peer block min-h-[auto] text-[20px] rounded-none w-full rounded border-0 border-b-2 border-gray-300 appearance-none bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dak:text-white dak:placeholder:text-neutral-300 dak:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="message"
            rows={3}
            placeholder="Your message"
            defaultValue={""}
            value={formInput.message}
            onChange={handleInputChange}
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-[15px] text-gray-500 dak:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dak:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <button className="w-full px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-none hover:bg-black/70 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Contact us
        </button>
      </form>
    </section>
  );
}
