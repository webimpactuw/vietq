import Link from "next/link";

export default function ContactForm({}) {
    return (
        <> <div className="flex flex-col items-start justify-start m-8 space-y-20 w-2/5">
                <div className="grid grid-cols-2 gap-x-28 gap-y-10">
                    <InputLink>First Name</InputLink>
                    <InputLink>Last Name</InputLink>
                    <InputLink>Email</InputLink>
                    <InputLink>Phone Number</InputLink>
                </div>
                <div className="flex flex-col space-y-8 w-full"> 
                    <div className="font-bold text-black text-2xl">Message</div>
                    <textarea type="text" placeholder="Your Message" className="placeholder-gray-600 text-black bg-white border shadow-sm resize-none w-full h-60 rounded-3xl py-4 px-6"/>
                    <button className="bg-black text-white font-extrabold rounded-full py-2 px-4 uppercase w-1/4">send message</button>
                </div>
            </div>
        </>
    );
}

function InputLink({children}) {
    return (
        <div className="flex flex-col space-y-3"> 
            <div className="font-bold text-black text-2xl">
                {children}
            </div>
            <input type="text" placeholder={children} className="placeholder-gray-600 text-black bg-white border shadow-sm rounded-full py-4 px-6 w-80 h-14"/>
        </div>
    );
  }
