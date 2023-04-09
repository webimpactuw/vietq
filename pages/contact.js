import ContactForm from "@/components/global/ContactForm";
import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

import Image from "next/image";

import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function Contact() {
  const [error, setError] = useState(null);

  return (
    <RootLayout title="Contact Us" navTransparent={true}>
      <div className="pb-4 md:pb-16">
        <div className="contact-gradient text-white pt-24 md:pt-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter font-display">
                  About VietQ
                </h3>
                <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                  Have a question?
                  <br />
                  Let&apos;s get in touch!
                </h1>
              </div>
              <Socials />
            </div>
          </Container>
        </div>
        <Container>
          <ContactForm />
        </Container>
      </div>
      {/* <Container>
        <div className="max-w-4xl mx-auto pt-24 md:pt-32 pb-4 md:pb-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter font-display">
                Contact Us
              </h3>
              <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                Have a question?
                <br />
                Let's get in touch!
              </h1>
            </div>
            <Socials />
          </div>
          <hr className="border-blue-900" />
          <ContactForm />
        </div>
      </Container> */}
      {/* <Container>
        <div className="pt-28 md:py-32 grid md:grid-cols-2 gap-8 md:gap-20">
          <div className="w-full space-y-8 contact-gradient pl-8 pr-10 py-8 rounded-4xl text-white">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter font-display">
                  Contact us
                </h3>
                <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                  Let's get in touch!
                </h1>
              </div>
              <p className="text-lg text-white/75 font-medium">
                Thank you for your interest in VietQ!
                <br />
                If you have any inquiries about our organization, our mission,
                or any of our initiatives, feel free to leave a message.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <IconLink text="Seattle, WA">
                <MapPinIcon className="text-white w-6 h-6" />
              </IconLink>
              <IconLink
                text="vietqorganization@gmail.com"
                href="@mailto:vietqorganization@gmail.com"
              >
                <EnvelopeIcon className="text-white w-6 h-6" />
              </IconLink>
              <IconLink
                text="@vietseattle"
                href="https://www.instagram.com/vietqseattle/?hl=en"
              >
                <Image
                  src="/socials/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </IconLink>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container> */}
    </RootLayout>
  );
}

function Socials() {
  return (
    <div className="flex flex-col items-start md:items-end justify-end space-y-4">
      <IconLink text="Seattle, WA">
        <MapPinIcon className="w-6 h-6" />
      </IconLink>
      <IconLink
        text="vietqorganization@gmail.com"
        href="@mailto:vietqorganization@gmail.com"
      >
        <EnvelopeIcon className="w-6 h-6" />
      </IconLink>
      <IconLink
        text="@vietseattle"
        href="https://www.instagram.com/vietqseattle/?hl=en"
      >
        <Image
          src="/socials/instagram.svg"
          alt="Instagram"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </IconLink>
    </div>
  );
}

function IconLink({ children, text, href = "" }) {
  return (
    <div
      className={`${
        href.length > 0
          ? " hover:opacity-75 transition-opacity cursor-pointer"
          : ""
      } flex space-x-2 items-center md:justify-end md:text-right uppercase tracking-widest font-semibold`}
    >
      {children}
      {href.length > 0 ? (
        <a href={href} className="text-sm -mt-0.5">
          {text}
        </a>
      ) : (
        <p className="text-sm -mt-0.5">{text}</p>
      )}
    </div>
  );
}
