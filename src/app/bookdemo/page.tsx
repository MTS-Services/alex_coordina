// import Link from 'next/link';
// import Image from 'next/image';
// import { GoDotFill } from 'react-icons/go';

// const demoBenefits = [
//   'A live walkthrough of key features like Temporary Works, Site Management, and QR Code integration',
//   'Answers to your specific project and team needs',
//   'Tips on setting up your first site, assets, and users',
//   'Expert guidance from a product specialist',
//   'A clear picture of how Coordeck fits into your existing workflows',
// ];

// const BookDemoPage = () => {
//   return (
//     <main className='flex items-center justify-center px-4 py-36 pb-4 sm:px-8'>
//       <div className='flex w-full max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12'>
//         <div className='flex w-full flex-col items-start gap-9 lg:w-1/2'>
//           <div className='flex flex-col items-start gap-4'>
//             <h1 className='text-3xl font-bold leading-9 text-neutral-800'>
//               Book Your Demo with Coordeck
//             </h1>
//             <p className='text-base leading-7 text-neutral-800'>
//               See how Coordeck can help you streamline construction workflows,
//               reduce risk, and gain full visibility over your projects—from the
//               office to the field.
//             </p>
//           </div>
//           <div className='flex flex-col items-start gap-1.5'>
//             <h2 className='text-xl font-semibold leading-7 text-neutral-800'>
//               What You’ll Get in the Demo:
//             </h2>
//             <ul className='flex flex-col '>
//               {demoBenefits.map((benefit, index) => (
//                 <li key={index} className='flex items-start gap-3'>
//                   <GoDotFill className='h-3 w-3 mt-2' />
//                   <span className='text-base leading-loose text-neutral-800'>
//                     {benefit}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='relative mt-4 lg:mt-0 flex w-full items-center pl-12'>
//             <Image
//               src={'/images/bookdemo/QR.png'}
//               alt='Coordeck mobile app interface'
//               className='absolute left-0 top-52 -translate-y-1/2 h-72 w-auto rounded-xl border-[6px] border-gray-300 object-contain shadow-lg'
//               width={132}
//               height={288}
//             />
//             <Image
//               src={'/images/bookdemo/chart.png'}
//               alt='Coordeck dashboard on a laptop'
//               className='h-auto w-full rounded-xl border-[6px] border-gray-300 object-cover shadow-lg'
//               width={531}
//               height={323}
//             />
//           </div>
//         </div>

//         <div className='flex w-full lg:w-1/2'>
//           <form className='flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#E9F4F8] p-10'>
//             <p className='w-full text-base leading-10 text-neutral-800'>
//               Fill out the form below and we’ll send you a confirmation email
//               with next steps and a link to schedule your demo at a time that
//               works for you.
//             </p>
//             <div className='flex w-full flex-col gap-8 pt-2'>
//               <div className='flex flex-col gap-2'>
//                 <label
//                   htmlFor='fullName'
//                   className='pl-2 text-sm font-bold leading-tight text-neutral-800'
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type='text'
//                   id='fullName'
//                   name='fullName'
//                   className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
//                 />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <label
//                   htmlFor='companyName'
//                   className='pl-2 text-sm font-bold leading-tight text-neutral-800'
//                 >
//                   Company Name
//                 </label>
//                 <input
//                   type='text'
//                   id='companyName'
//                   name='companyName'
//                   className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
//                 />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <label
//                   htmlFor='phoneNumber'
//                   className='pl-2 text-sm font-bold leading-tight text-neutral-800'
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type='tel'
//                   id='phoneNumber'
//                   name='phoneNumber'
//                   className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
//                 />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <label
//                   htmlFor='email'
//                   className='pl-2 text-sm font-bold leading-tight text-neutral-800'
//                 >
//                   Email
//                 </label>
//                 <input
//                   type='email'
//                   id='email'
//                   name='email'
//                   className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
//                 />
//               </div>
//             </div>
//             <div className='flex w-full items-center gap-2 pt-4'>
//               <input
//                 type='checkbox'
//                 id='newsletter'
//                 name='newsletter'
//                 className='h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500'
//               />
//               <label htmlFor='newsletter' className='text-sm text-neutral-800'>
//                 Keep me in the loop with Coordeck news and updates.
//               </label>
//             </div>
//             <button
//               type='submit'
//               className='mt-2 h-10 w-full rounded-3xl bg-teal-950 px-6 py-2.5 text-center text-sm font-semibold tracking-tight text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-950/50'
//             >
//               Book a Demo
//             </button>
//             <p className='pt-2 text-center text-xs text-neutral-800'>
//               By submitting, you agree to our{' '}
//               <Link
//                 href='/privacy-policy'
//                 className='text-sky-500 underline hover:text-sky-700'
//               >
//                 Privacy Policy
//               </Link>{' '}
//               and{' '}
//               <Link
//                 href='/terms-of-service'
//                 className='text-sky-500 underline hover:text-sky-700'
//               >
//                 Terms of Service.
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BookDemoPage;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { FiX } from 'react-icons/fi';

const demoBenefits = [
  'A live walkthrough of key features like Temporary Works, Site Management, and QR Code integration',
  'Answers to your specific project and team needs',
  'Tips on setting up your first site, assets, and users',
  'Expert guidance from a product specialist',
  'A clear picture of how Coordeck fits into your existing workflows',
];

// Modal Component
const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50'>
      <div className='relative flex w-full max-w-md flex-col items-center gap-4 rounded-lg bg-white p-8 text-center shadow-lg'>
        <h1 className='text-xl text-left font-bold text-neutral-600'>
          Demo booked Successfully
        </h1>
        <p className='text-neutral-600'>
          We will contact you soon to arrange your demo session.
        </p>
        <button
          onClick={onClose}
          className='mt-4 h-10 w-full max-w-xs rounded-3xl bg-teal-950 px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-950/50'
        >
          OK
        </button>
      </div>
    </div>
  );
};

const BookDemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <main className='flex items-center justify-center px-4 py-36 pb-18 sm:px-8'>
        <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12'>
          <div className='flex w-full flex-col items-start gap-9 lg:w-1/2'>
            <div className='flex flex-col items-start gap-4'>
              <h1 className='text-3xl font-bold leading-9 text-neutral-800'>
                Book Your Demo with Coordeck
              </h1>
              <p className='text-base leading-7 text-neutral-800'>
                See how Coordeck can help you streamline construction workflows,
                reduce risk, and gain full visibility over your projects—from
                the office to the field.
              </p>
            </div>
            <div className='flex flex-col items-start gap-1.5'>
              <h2 className='text-xl font-semibold leading-7 text-neutral-800'>
                What You’ll Get in the Demo:
              </h2>
              <ul className='flex flex-col '>
                {demoBenefits.map((benefit, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <GoDotFill className='h-3 w-3 mt-2 flex-shrink-0' />
                    <span className='text-base leading-loose text-neutral-800'>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='relative mt-4 lg:mt-auto flex w-full items-center pl-12'>
              <Image
                src={'/images/bookdemo/QR.png'}
                alt='Coordeck mobile app interface'
                className='absolute -left-3.5 top-44 -translate-y-1/2 h-68 w-auto rounded-xl border-[6px] border-gray-300 object-contain shadow-lg'
                width={132}
                height={288}
              />
              <Image
                src={'/images/bookdemo/chart.png'}
                alt='Coordeck dashboard on a laptop'
                className='h-auto w-full rounded-xl border-[6px] border-gray-300 object-cover shadow-lg'
                width={531}
                height={323}
              />
            </div>
          </div>

          <div className='flex w-full lg:w-1/2'>
            <form
              onSubmit={handleFormSubmit}
              className='flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#E9F4F8] p-10'
            >
              <p className='w-full text-base leading-7 text-neutral-800'>
                Fill out the form below and we’ll send you a confirmation email
                with next steps and a link to schedule your demo at a time that
                works for you.
              </p>
              <div className='flex w-full flex-col gap-5 pt-2'>
                <div className='flex flex-col gap-2'>
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
                    className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='companyName'
                    className='pl-2 text-sm font-medium leading-tight text-neutral-800'
                  >
                    Company Name
                  </label>
                  <input
                    type='text'
                    id='companyName'
                    name='companyName'
                    className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='phoneNumber'
                    className='pl-2 text-sm font-medium leading-tight text-neutral-800'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
                  />
                </div>
                <div className='flex flex-col gap-2'>
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
                    className='h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50'
                  />
                </div>
              </div>
              <div className='flex w-full items-center gap-2 pt-4'>
                <input
                  type='checkbox'
                  id='newsletter'
                  name='newsletter'
                  className='h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500'
                />
                <label
                  htmlFor='newsletter'
                  className='text-sm text-neutral-800'
                >
                  Keep me in the loop with Coordeck news and updates.
                </label>
              </div>
              <button
                type='submit'
                className='mt-2 h-10 w-full rounded-3xl bg-teal-950 px-6 py-2.5 text-center text-sm font-semibold tracking-tight text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-950/50'
              >
                Book a Demo
              </button>
              <p className='pt-2 text-center text-xs text-neutral-800'>
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
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BookDemoPage;
