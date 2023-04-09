export default function BlogPostCard() {
  return (
    <div className="w-80 h-96 rounded-2xl overflow-hidden relative shrink-0">
      <img
        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
        className="w-full h-full object-cover"
      />
      <div className="p-6 absolute bottom-0 left-0 bg-gradient-to-b to-gray-900 from-transparent w-full h-full">
        <div className="flex flex-col items-start justify-end w-full h-full text-white font-semibold">
          <div className="flex items-center justify-start space-x-2">
            <p className="text-xs font-thin">
              Mar 20, 2020 •
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block pb-1"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                  clipRule="evenodd"
                />
              </svg>
              Michael Foster
            </p>
          </div>
          <h3 className="text-sm py-2">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </h3>
        </div>
      </div>
    </div>
  );
}
