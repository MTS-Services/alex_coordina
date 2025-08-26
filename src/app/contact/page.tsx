import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiFacebook } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <main className='flex items-center justify-center px-6 py-36 pb-18 sm:px-16'>
      <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-24'>
        <div className='flex w-full max-w-lg flex-col items-start gap-12'>
          <div className='flex flex-col items-start gap-4'>
            <h1 className='text-3xl font-bold leading-9 text-neutral-800'>
              Contact Us
            </h1>
            <p className='text-base leading-7 text-neutral-800'>
              Have questions about Coordeck or need help getting started? Our
              team is here to help. Whether you&apos;re looking for support,
              partnerships, or more info about our platform, just reach out—we’d
              love to hear from you.
            </p>
          </div>
          <div className='flex flex-col items-start gap-8'>
            <h2 className='text-xl font-semibold leading-7 text-neutral-800'>
              Contacts
            </h2>
            <div className='flex flex-col items-start gap-6'>
              <a
                href='mailto:Info@coordeck.com'
                className='group flex items-center gap-6'
              >
                <FiMail className='h-6 w-6 text-neutral-600 transition-colors group-hover:text-neutral-900' />
                <span className='text-base font-medium tracking-wide text-black transition-colors group-hover:text-neutral-700'>
                  Info@coordeck.com
                </span>
              </a>
              <a
                href='tel:+44-123456789'
                className='group flex items-center gap-6'
              >
                <FiPhone className='h-6 w-6 text-neutral-600 transition-colors group-hover:text-neutral-900' />
                <span className='text-base font-medium tracking-wide text-black transition-colors group-hover:text-neutral-700'>
                  +44-123456789
                </span>
              </a>
            </div>
            <div className='flex items-center gap-10'>
              <a
                href='#'
                aria-label='LinkedIn'
                className='text-neutral-600 transition-colors hover:text-neutral-900'
              >
                <FiLinkedin className='h-6 w-6' />
              </a>
              <a
                href='#'
                aria-label='Facebook'
                className='text-neutral-600 transition-colors hover:text-neutral-900'
              >
                <FiFacebook className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>

        <div className='w-full max-w-lg flex-shrink-0'>
          <form className='flex flex-col items-center gap-4 rounded-2xl bg-slate-50 p-8'>
            <div className='flex w-full flex-col gap-8'>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='fullName'
                  className='pl-2 text-sm font-medium leading-tight text-neutral-800'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  className='h-11 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='email'
                  className='pl-2 text-sm font-medium leading-tight text-neutral-800'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='h-11 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='message'
                  className='pl-2 text-sm font-medium leading-tight text-neutral-800'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  className='w-full rounded-xl border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50'
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='h-10 w-full rounded-3xl bg-teal-950 px-6 py-2.5 text-center text-sm font-semibold tracking-tight text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-950/50'
            >
              Submit
            </button>
            <p className='text-xs text-neutral-800'>
              By submitting, you agree to our{' '}
              <Link
                href='/privacy-policy'
                className='text-sky-500 underline hover:text-sky-700'
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                href='/terms-of-service'
                className='text-sky-500 underline hover:text-sky-700'
              >
                Terms of Service.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
