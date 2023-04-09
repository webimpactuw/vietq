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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
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
