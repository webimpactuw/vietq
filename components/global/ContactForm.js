import Link from "next/link";

export default function ContactForm({}) {
    return (
        <> <div className="flex flex-col items-start justify-start space-y-4 w-full">
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                    <InputLink text="First">First Name*</InputLink>
                    <InputLink text="Last">Last Name*</InputLink>
                    <InputLink text="email@example.com">Email</InputLink>
                    <InputLink text="XXX-XXX-XXX">Phone Number</InputLink>
                    <div className="col-span-2 space-y-3 font-display tracking-tighter"> 
                        <div className="font-bold text-black text-2xl">
                            Subject Matter
                        </div>
                        <select className="text-black bg-white border shadow-sm rounded-full text-sm pb-0.5 px-4 w-full h-10">   
                            <option value="" selected disabled hidden>
                                Select subject matter
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col w-full space-y-3 tracking-tighter font-display"> 
                    <div className="font-bold text-black text-2xl">Message*</div>
                    <textarea placeholder="Your message here" className="text-sm placeholder-gray-600 text-black bg-white border shadow-sm resize-none w-full h-48 rounded-4xl py-4 px-4"/>
                    <button className="place-self-end bg-black text-white font-extrabold rounded-full py-2 px-4 uppercase w-1/3">send message</button>
                </div>
            </div>
        </>
    );Y
}

function InputLink({children, text}) {
    return (
        <div className="flex flex-col space-y-3 tracking-tighter font-display"> 
            <div className="font-bold text-black text-2xl">
                {children}
            </div>
            <input type="text" placeholder={text} className="placeholder-gray-600 text-black bg-white border shadow-sm rounded-full text-sm py-4 px-4 w-56 h-10"/>
        </div>
    );
  }
