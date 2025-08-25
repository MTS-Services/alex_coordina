// import Link from 'next/link';
// import Image from 'next/image';

// const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width='20'
//     height='20'
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke='currentColor'
//     strokeWidth='2'
//     strokeLinecap='round'
//     strokeLinejoin='round'
//     {...props}
//   >
//     <polyline points='20 6 9 17 4 12' />
//   </svg>
// );

// const demoBenefits = [
//   'A live walkthrough of key features like Temporary Works, Site Management, and QR Code integration',
//   'Answers to your specific project and team needs',
//   'Tips on setting up your first site, assets, and users',
//   'Expert guidance from a product specialist',
//   'A clear picture of how Coordeck fits into your existing workflows',
// ];

// const BookDemoPage = () => {
//   return (
//     <main className='flex items-center justify-center px-6 py-36 pb-4 sm:px-16'>
//       <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-20'>
//         <div className='flex w-full max-w-xl flex-col items-start gap-9'>
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
//           <div className='flex flex-col items-start gap-4'>
//             <h2 className='text-xl font-semibold leading-7 text-neutral-800'>
//               What You’ll Get in the Demo:
//             </h2>
//             <ul className='flex flex-col gap-3'>
//               {demoBenefits.map((benefit, index) => (
//                 <li key={index} className='flex items-start gap-3'>
//                   <CheckIcon className='h-5 w-5 flex-shrink-0 text-sky-500 mt-1' />
//                   <span className='text-base leading-loose text-neutral-800'>
//                     {benefit}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='relative mt-4 flex w-full items-center'>
//             <Image
//               src={'/images/bookdemo/QR.png'}
//               alt='Coordeck mobile app interface'
//               className='absolute -left-4 top-12 h-72 w-34 rounded-xl border-[6px] border-gray-300 object-cover shadow-lg'
//               width={288}
//               height={288}
//             />
//             <Image
//               src={'/images/bookdemo/chart.png'}
//               alt='Coordeck dashboard on a laptop'
//               className='image rounded-xl border-[6px] border-gray-300 object-cover shadow-lg ml-12'
//               width={531}
//               height={100}
//             />
//           </div>
//         </div>

//         <div className='w-full max-w-lg flex-shrink-0'>
//           <form className='flex flex-col items-center gap-4 rounded-3xl bg-slate-100 p-6'>
//             <p className='w-full text-base leading-7 text-neutral-800'>
//               Fill out the form below and we’ll send you a confirmation email
//               with next steps and a link to schedule your demo at a time that
//               works for you.
//             </p>
//             <div className='flex w-full flex-col gap-6 pt-2'>
//               <div className='flex flex-col gap-1'>
//                 <label
//                   htmlFor='fullName'
//                   className='pl-2 text-sm font-medium leading-tight text-neutral-800'
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
//                   className='pl-2 text-sm font-medium leading-tight text-neutral-800'
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
//                   className='pl-2 text-sm font-medium leading-tight text-neutral-800'
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
//                   className='pl-2 text-sm font-medium leading-tight text-neutral-800'
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
//                 className='h-5 w-5 rounded border-gray-300 text-sky-500 focus:ring-sky-500'
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

import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';

const demoBenefits = [
  'A live walkthrough of key features like Temporary Works, Site Management, and QR Code integration',
  'Answers to your specific project and team needs',
  'Tips on setting up your first site, assets, and users',
  'Expert guidance from a product specialist',
  'A clear picture of how Coordeck fits into your existing workflows',
];

const BookDemoPage = () => {
  return (
    <main className='flex items-center justify-center px-4 py-36 pb-4 sm:px-8'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12'>
        <div className='flex w-full flex-col items-start gap-9 lg:w-1/2'>
          <div className='flex flex-col items-start gap-4'>
            <h1 className='text-3xl font-bold leading-9 text-neutral-800'>
              Book Your Demo with Coordeck
            </h1>
            <p className='text-base leading-7 text-neutral-800'>
              See how Coordeck can help you streamline construction workflows,
              reduce risk, and gain full visibility over your projects—from the
              office to the field.
            </p>
          </div>
          <div className='flex flex-col items-start gap-1.5'>
            <h2 className='text-xl font-semibold leading-7 text-neutral-800'>
              What You’ll Get in the Demo:
            </h2>
            <ul className='flex flex-col '>
              {demoBenefits.map((benefit, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <GoDotFill className='h-3 w-3 mt-2' />
                  <span className='text-base leading-loose text-neutral-800'>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative mt-4 lg:mt-0 flex w-full items-center pl-12'>
            <Image
              src={'/images/bookdemo/QR.png'}
              alt='Coordeck mobile app interface'
              className='absolute left-0 top-1/2 -translate-y-1/2 h-72 w-auto rounded-xl border-[6px] border-gray-300 object-contain shadow-lg'
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
          <form className='flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#E9F4F8] p-10'>
            <p className='w-full text-base leading-10 text-neutral-800'>
              Fill out the form below and we’ll send you a confirmation email
              with next steps and a link to schedule your demo at a time that
              works for you.
            </p>
            <div className='flex w-full flex-col gap-8 pt-2'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='fullName'
                  className='pl-2 text-sm font-bold leading-tight text-neutral-800'
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
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='companyName'
                  className='pl-2 text-sm font-bold leading-tight text-neutral-800'
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
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='phoneNumber'
                  className='pl-2 text-sm font-bold leading-tight text-neutral-800'
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
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='email'
                  className='pl-2 text-sm font-bold leading-tight text-neutral-800'
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
              <label htmlFor='newsletter' className='text-sm text-neutral-800'>
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
  );
};

export default BookDemoPage;
