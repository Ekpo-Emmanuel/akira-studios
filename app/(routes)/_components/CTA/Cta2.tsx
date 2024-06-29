'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

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
export default function Cta2() {
    const router = useRouter();
    const [formInput, setFormInput] = useState<FormInput>(initialFormInput);
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSection(true);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowSection(false);
    };

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
            
            try {
                // await new Promise((resolve) => setTimeout(resolve, 2000));
                const response = await axios.post('/api/contact/', formInput, {
                    headers: { 'Content-Type': 'application/json' }
                });
            
                if (response.data.success) {
                    console.log('Form submitted successfully:', response.data);
                    setFormInput(initialFormInput);
                }
            } catch (error) {
                console.error('Error sending email:', error);
            } finally {
                setIsLoading(false);
                router.push('/contact/thank-you');
                setFormInput(initialFormInput);
            }
        }
    };
  return (
    <>
    {showSection && (
        <section className="fixed top-0 flex items-center justify-center z-10  bg-black/60 w-full h-screen">
      <form onSubmit={handleSubmit} className="relative bg-white w-full sm:w-3/4 lg:w-1/2 m-4 p-5 sm:p-10">
        <div onClick={handleClose} className="absolute right-5 w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-black hover:text-white transition ml-auto text-black md:mb-5">
            <X />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 text-balance">
          Elevating Your Digital Presence with
            <span className="text-gray-600"> Akira Studios</span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500">
            Unleash The Power of Visuals
          </p>
        </div>
        <div className="grid md:grid-cols-2 mb-5 md:gap-6 mt-5">
            <div className="mb-5">
            <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 drk:text-white"
            >
                First name
            </label>
            <input
                type="text"
                id="firstName"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-none focus:ring-black focus:border-black block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-black drk:focus:border-black ${errors.firstName ? 'border-red-700' : ''}`}
                value={formInput.firstName}
                onChange={handleInputChange}
            />
            </div>
            <div className="">
            <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 drk:text-white"
            >
                Last name
            </label>
            <input
                type="lastName"
                id="lastName"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-none focus:ring-black focus:border-black block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-black drk:focus:border-black ${errors.lastName ? 'border-red-700' : ''}`}
                value={formInput.lastName}
                onChange={handleInputChange}
            />
            </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 drk:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-none focus:ring-black focus:border-black block w-full p-2.5 drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-black drk:focus:border-black ${errors.email ? 'border-red-700' : ''}`}
            value={formInput.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 drk:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`block p-2.5 w-full text-lg placeholder:text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-black focus:border-black drk:bg-gray-700 drk:border-gray-600 drk:placeholder-gray-400 drk:text-white drk:focus:ring-blue-500 drk:focus:border-blue-500`}
            placeholder="Write your thoughts here..."
            defaultValue={""}
            value={formInput.message}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-black hover:bg-black/80  font-medium rounded-none w-full sm:w-auto px-5 py-2.5 text-center drk:bg-black"
        >
          Submit
        </button>
      </form>
    </section> )}
    </>
  );
}
