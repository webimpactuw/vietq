import Image from "next/image";
import JoinOurCommunity from "./JoinOurCommunity";

import vietQLogo from "../../public/logos/vietq_logo_white.png";

export default function CallToAction({ preview = false }) {
  return (
    <div
      className={`${preview ? "pointer-events-none" : ""} px-4 py-8 md:py-16`}
    >
      <div className="max-w-5xl mx-auto overflow-hidden rounded-4xl relative contact-gradient">
        {/* <img
        src="https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg"
        className="absolute w-full h-full object-cover"
      /> */}
        <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-900/25">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='37' height='36.5' viewBox='0 0 148 146' opacity='0.025' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' fill='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' fill='%23000000'/%3E%3Cpath d='M15.8438 129.285L5.34378 140.285C-15.7637 76.2849 41.7316 -19.2152 141.344 4.78465L129.844 15.7847C79.7363 -3.71509 -1.26373 51.7849 15.8438 129.285Z' stroke='%23000000'/%3E%3Cpath d='M130.737 16.2847L142.237 5.28474C163.344 69.2845 105.349 165.285 5.73693 141.285L16.2366 129.785C66.3441 149.285 147.844 93.7845 130.737 16.2847Z' stroke='%23000000'/%3E%3C/svg%3E")`,
            }}
          >
            <div className="rounded-4xl px-4 border-4 py-16 md:py-24 border-black/30 flex flex-col items-center justify-center space-y-8 w-full">
              <div className="text-center text-white font-display md:max-w-xl space-y-4 w-full">
                <Image
                  src={vietQLogo}
                  alt="VietQ Logo"
                  className="w-20 mx-auto"
                />
                <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                  Join Our Community
                </h1>
                <p className="text-lg text-white/75 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <JoinOurCommunity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
