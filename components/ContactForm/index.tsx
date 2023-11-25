'use client';
import {
  EnvelopeIcon,
  PhoneIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';
import { Simulate } from 'react-dom/test-utils';
import submit = Simulate.submit;
import { useState } from 'react';
export default function ContactForm() {
  const [inputs, setInputs] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    setSubmitted(true);
    const formdata = {
      FirstName: inputs.FirstName,
      LastName: inputs.LastName,
      Email: inputs.Email,
      PhoneNumber: inputs.PhoneNumber,
      Message: inputs.Message,
    };

    const email = fetch('/api/sendFormEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata),
    });
  };

  return (
    <div className='relative isolate bg-white'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    x='100%'
                    y={-1}
                    patternUnits='userSpaceOnUse'
                  >
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth={0} fill='white' />
                <svg x='100%' y={-1} className='overflow-visible fill-gray-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                  fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                />
              </svg>
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
              Get in touch
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <HomeModernIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>Edinburgh</dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <PhoneIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-gray-900'
                    href='tel:+44 (0) 7890047237'
                  >
                    +44 (0) 7890047237
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <EnvelopeIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-gray-900'
                    href='mailto:hello@petercarlyle.co.uk'
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {!submitted ? (
          <form className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='FirstName'
                      id='FirstName'
                      value={inputs.FirstName}
                      onChange={handleChange}
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Company Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='LastName'
                      id='LastName'
                      value={inputs.LastName}
                      onChange={handleChange}
                      autoComplete='Company name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='Email'
                      id='Email'
                      value={inputs.Email}
                      onChange={handleChange}
                      autoComplete='email'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Phone number
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='tel'
                      name='PhoneNumber'
                      id='PhoneNumber'
                      value={inputs.PhoneNumber}
                      onChange={handleChange}
                      autoComplete='tel'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      name='Message'
                      id='Message'
                      value={inputs.Message}
                      onChange={handleChange}
                      rows={4}
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  onClick={handleOnClick}
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div>
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1'>
                <h2 className='mt-[50%] text-3xl font-bold tracking-tight text-gray-900'>
                  Thanks for getting in touch, I will contact you soon.
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
