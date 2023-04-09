export default function JoinOurCommunity({ footer = false }) {
  return (
    <div
      className={`flex md:flex-row flex-col md:space-x-4 md:items-center ${
        footer ? "md:justify-start" : "md:justify-center"
      } space-y-4 md:space-y-0 w-full`}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className={`${
          footer
            ? "placeholder-gray-400 text-white bg-gray-800 border-gray-700 focus:outline-blue-700 hover:bg-gray-900"
            : "placeholder-gray-500 text-blue-900 bg-white border-gray-300 focus:outline-blue-700 hover:bg-gray-100"
        } border shadow-xl text-sm rounded-full pt-3.5 px-4 pb-4 md:w-72 h-12 font-display transition-colors`}
      />
      <button
        type="submit"
        className={`${
          footer
            ? "text-blue-900 bg-red-100 border-black/25 focus:outline-red-700 hover:bg-red-200"
            : "text-white bg-blue-600 border-blue-700 focus:outline-blue-800 hover:bg-blue-700"
        } uppercase whitespace-nowrap shadow-xl h-12 border text-xs rounded-full py-2 px-6 font-semibold tracking-widest transition-colors`}
      >
        Join our community
      </button>
    </div>
  );
}
