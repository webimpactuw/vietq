import Image from "next/image";
import JoinOurCommunity from "./JoinOurCommunity";

import vietQLogo from "../../public/logos/vietq_logo_white.png";
import Container from "./Container";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function CallToAction({ preview = false }) {
  return (
    // <div className={`${preview ? "pointer-events-none" : ""} contact-gradient`}>
    //   <div
    //     className="w-full h-full"
    //     style={{
    //       backgroundImage: `url("data:image/svg+xml,%3Csvg width='37' height='36.5' viewBox='0 0 148 146' opacity='0.025' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' fill='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' fill='%23000000'/%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' stroke='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' stroke='%23000000'/%3E%3C/svg%3E")`,
    //     }}
    //   >
    //     <Container>
    //       <div className="md:flex items-center justify-between space-y-8 md:space-y-0">
    //         <div className="text-center md:text-left text-white font-display md:max-w-xl space-y-4 w-full">
    //           {/* <Image src={vietQLogo} alt="VietQ Logo" className="w-20" /> */}
    //           <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
    //             Join Our Community
    //           </h1>
    //         </div>
    //         <JoinOurCommunity />
    //       </div>
    //     </Container>
    //   </div>
    // </div>
    <div
      className={`relative isolate overflow-hidden bg-blue-900 py-1 sm:py-12 lg:py-16 ${
        preview ? "pointer-events-none" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tighter font-display text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6">
              <JoinOurCommunity footer={true} />
            </div>
          </div>
          {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl> */}
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] gradient opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
