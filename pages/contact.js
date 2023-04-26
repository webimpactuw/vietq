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
                  Contact VietQ
                </h3>
                <h1 className="text-5xl font-bold tracking-tighter font-display leading-tight">
                  Have a question?
                  <br />
                  Let&apos;s get in touch!
                </h1>
                <p>
                  If you have inquries about our events or organization, please fill out this form and we'll get back to you soon!
                </p>
              </div>
            </div>
          </Container>
          <div className="gradient w-full h-4" />
        </div>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 pt-12">
            <ContactForm />
            <Socials />
          </div>
        </Container>
      </div>
    </RootLayout>
  );
}

function Socials() {
  return (
    <div className="flex flex-col items-start md:items-start justify-start space-y-4 md:order-last order-first">
      <h1 className="text-xl font-semibold tracking-tightest">Email Us</h1>
      <IconLink
        text="vietqorganization@gmail.com"
        href="@mailto:vietqorganization@gmail.com"
      >
        <EnvelopeIcon className="w-6 h-6" />
      </IconLink>
      <IconLink text="Seattle, WA">
        <MapPinIcon className="w-6 h-6" />
      </IconLink>
      
      <h1 className="text-xl font-semibold tracking-tightest">Follow Us</h1>
      <div className="flex flex-row items-start gap-x-2">
        <h1>f</h1>
        <IconLink
          text="@vietqseattle"
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
