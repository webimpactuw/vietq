import ContactForm from "@/components/global/ContactForm";
import Container from "@/components/global/Container";
import RootLayout from "@/components/global/RootLayout";

import {MapPinIcon} from "@heroicons/react/24/outline"
import {EnvelopeIcon} from "@heroicons/react/24/outline"
import {CameraIcon} from "@heroicons/react/24/outline"


export default function Contact() {
  return <RootLayout title="Contact Us">
    <Container>
      <div className="py-32 grid grid-cols-2 gap-20">
          <div className="w-auto space-y-10 contact-gradient pl-8 pr-10 py-8 rounded-4xl"> 
            <h3 className="text-2xl font-bold tracking-tighter font-display text-white">
              Contact
            </h3>
            <h1 className="text-6xl font-bold tracking-tighter font-display leading-tighter text-white">
              Let's chat!
            </h1>
            <p className="text-xl tracking-wider font-display fond-bold leading-relaxed text-white">
              Thank you for your interest in VietQ! If you have any inquiries about our organization, our mission, or any of our initiatives, feel free to leave a message.
            </p>
            <div className="flex flex-col space-y-6">
              <IconLink text="Seattle, WA">
                <MapPinIcon className="text-gray-300 w-8 h-8"/>
              </IconLink>
              <IconLink text="vietqorganization@gmail.com" href="@mailto:vietqorganization@gmail.com">
                <EnvelopeIcon className="text-gray-300  w-8 h-8"/>
              </IconLink>
              <IconLink text="@vietseattle" href="https://www.instagram.com/vietqseattle/?hl=en">
                <CameraIcon className="text-gray-300  w-8 h-8"/>
              </IconLink>
            </div>
          </div>
        <ContactForm/>
      </div>
    </Container>
  </RootLayout>;
}

function IconLink({children, text, href=""}) {
  return (
    <div  className="flex space-x-2 items-center justify-start">
      {children}
     {
      href.length > 0 ?  <a href={href} className="text-gray-300 text-xl -mt-0.5">
        {text}
    </a> : <p className="text-gray-300 text-xl -mt-0.5">
        {text}
      </p>
     }
    </div>
  );
}