import { VideoCameraIcon } from "@heroicons/react/20/solid";

export default function Pills({ tags, virtual, bg, text }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags?.map((tag) => (
        <Pill key={tag.slug} bg={bg} text={text}>
          Workshop
        </Pill>
      ))}
      {virtual ? (
        <Pill bg={bg} text={text}>
          <VideoCameraIcon className="w-4 h-4 mr-1" />
          Virtual
        </Pill>
      ) : null}
    </div>
  );
}

function Pill({ children, bg, text }) {
  return (
    <div
      className="text-sm px-3 py-1.5 font-medium rounded-full inline-flex items-center justify-end space-x-1 tracking-tight"
      style={{
        backgroundColor: bg,
        color: text,
      }}
    >
      {children}
    </div>
  );
}
