import { VideoCameraIcon } from "@heroicons/react/24/solid";

export default function Virtual({ location }) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold font-display tracking-tighter">
        Virtual
      </h2>
      <div className="flex items-center justify-start space-x-2">
        <VideoCameraIcon className="w-6 h-6" />
        <div>
          <h3 className="text-lg font-semibold font-display tracking-tighter">
            {location.link.title}
          </h3>
          <a
            href={location.link.url}
            className="underline font-medium text-sm text-gray-700 line-clamp-1"
          >
            {new URL(location.link.url).hostname}
          </a>
        </div>
      </div>
    </div>
  );
}
