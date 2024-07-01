import { StarIcon } from "@heroicons/react/24/solid";

export default function CommunityCard({
  section,
  color,
  scale = true,
  data = {
    title: "Title",
    description: "Description",
  },
  children = <StarIcon className={`w-8 h-8 ${color}`} />,
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden relative bg-champagne-50 border-champagne-700/25 ${
        section === 1 && scale ? "md:scale-110" : "md:scale-95"
      }`}
    >
      <div className="p-8 space-y-2">
        {children}
        <h3 className="text-lg font-semibold font-display">{data.title}</h3>
        <p className="text-sm font-medium text-gray-700">{data.description}</p>
      </div>
      <div
        className={`gradient h-2 w-full absolute bottom-0 ${
          section === 0 ? "one" : section === 1 ? "two" : "three"
        }`}
      />
    </div>
  );
}
