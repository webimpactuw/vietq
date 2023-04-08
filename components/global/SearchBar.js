

export default function SearchBar({}) {
    return (
        <>
            <div className="flex space-x-4 items-center justify-start">
                <input type="text" placeholder="Enter your email address" className="placeholder-gray-600 text-black bg-white border shadow-sm rounded-full py-4 px-6 w-96 h-14"/>
                <button className="text-white whitespace-nowrap bg-blue-800 font-sans shadow-sm h-14 border border-blue-900 rounded-full py-4 px-8 font-extrabold tracking-widest text-sm">
                    JOIN OUR COMMUNITY
                </button>
            </div>
        </>
    );
}