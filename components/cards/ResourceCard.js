export default function ResourceCard() {
    return(
        // <div className="bg-champagne w-full sm:w-1/2 md:w-1/3 h-108 rounded-xl overflow-hidden pb-2 border border-black/10 drop-shadow-lg">
        //     <img src="https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg" className="object-cover w-full h-1/2"/>
        //     <div className="flex flex-col items-start px-8 py-4 font-display">
        //         <h2 className="text-black font-bold text-lg uppercase pb-2 ">Lorem ipsum</h2>
        //         <p className="text-blue font-bold text-xs uppercase pb-2">By VietQ LGBTQ+</p>
        //         <p className="text-black font-thin text-xs pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        //         <button className="text-white text-center bg-red transform hover:bg-red-600 rounded-4xl py-2 px-4 text-sm uppercase font-bold">
        //             View Form &gt;
        //         </button>
        //     </div>
        // </div>
        <div className="w-80 h-108 overflow-hidden rounded-xl relative drop-shadow-lg border border-black/10">
            <img src="https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg" className="h-108 object-cover" />

            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent object-cover w-full h-full">
                <div className="p-4 flex flex-col items-start justify-end object-cover w-full h-full text-white font-display">
                    <h1 className="text-lg sm:text-xl font-bold">Lorem Ipsum</h1>
                    <p className="text-xs sm:text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
        </div>
    );
}