import { StarIcon } from "@heroicons/react/24/solid";

export default function CommunityCard({ section, color, scale = true }) {
  return (
    <div
      className={`rounded-xl border overflow-hidden bg-champagne-50 border-champagne-700/25 ${
        section === 1 && scale ? "md:scale-110" : "md:scale-95"
      }`}
    >
      <div className="px-8 pt-8 pb-8 space-y-2">
        <StarIcon className={`w-8 h-8 ${color}`} />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold font-display">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-sm font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
            quidem quos quas voluptatibus quibusdam quae.
          </p>
        </div>
      </div>
      <div
        className={`gradient h-2 w-full ${
          section === 0 ? "one" : section === 1 ? "two" : "three"
        }`}
      />
    </div>
  );
}
