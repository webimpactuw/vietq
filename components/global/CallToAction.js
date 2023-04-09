import JoinOurCommunity from "./JoinOurCommunity";

export default function CallToAction() {
    return (
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl relative">
            <img src="https://www.thoughtco.com/thmb/afeWP0VLyxBFrzS_s2D-C7V2PjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg" className="absolute w-full h-full object-cover" />

            <div className="relative bg-gradient-to-b from-gray-900/75 to-transparent">
                <div className="p-16 text-center rounded-3xl border-4 border-black/30 flex flex-col items-center justify-center text-white font-display">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-4 pb-4">Join Our Community</h1>
                    <p className="text-md sm:text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="pt-4 pb-8 tracking-tighter">
                        <JoinOurCommunity />
                    </div>
                </div>
            </div>
        </div>
    );
}