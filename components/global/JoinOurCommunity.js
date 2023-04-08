export default function JoinOurCommunity({ footer = false }) {
  if (footer) {
    return (
      <div className="flex space-x-4 items-center justify-start">
        <input
          type="email"
          placeholder="Enter your email address"
          className="placeholder-gray-400 text-white bg-gray-800 border border-gray-700 shadow-sm text-sm rounded-full p-4 w-72 h-12 focus:outline-blue-700 transition-all hover:bg-gray-900"
        />
        <button
          type="submit"
          className="text-blue-900 uppercase hover:bg-red-200 transition-colors whitespace-nowrap bg-red-100 shadow-sm h-12 border text-xs border-black/25 rounded-full py-2 px-6 font-bold tracking-widest focus:outline-red-700 transition-all hover:bg-red-200"
        >
          Join our community
        </button>
      </div>
    );
  }
}
