import JoinOurCommunity from "./JoinOurCommunity";

import {
  CalendarDaysIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function CallToAction({ preview = false }) {
  return (
    <div
      className={`relative isolate overflow-hidden bg-blue-900 py-8 sm:py-12 lg:py-16 ${
        preview ? "pointer-events-none" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter font-display text-white sm:text-4xl">
                Subscribe to our newsletter
              </h2>
              <p className="md:text-lg text-gray-300">
                Stay up to date with the latest news and events from VietQ.
              </p>
            </div>
            <div className="mt-6">
              <JoinOurCommunity footer={true} />
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="space-y-4">
              <CalendarDaysIcon className="h-8 w-8 text-white shrink-0" />
              <div className="space-y-2">
                <dt className="font-semibold text-white font-display text-lg">
                  Upcoming Events
                </dt>
                <dd className="text-gray-300">
                  Find out about our upcoming events and how you can get
                  involved.
                </dd>
              </div>
            </div>
            <div className="space-y-4">
              <InboxArrowDownIcon className="h-8 w-8 text-white shrink-0" />
              <div className="space-y-2">
                <dt className="font-semibold text-white font-display text-lg">
                  Stay in the know
                </dt>
                <dd className="text-gray-300">
                  Keep in touch with our community and stay up to date with the
                  latest news and events.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 rotate-180"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] gradient opacity-50"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
