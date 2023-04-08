export default function Home() {
  return (
    <div className="mx-auto max-w-3xl py-16 px-4 space-y-4">
      <div className="space-y-2 font-display">
        <h1 className="text-3xl font-bold tracking-tight">This is BeVietnam</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nunc nisl
          condimentum nunc, nec ultrices nunc ante nec nisl. Nulla facilisi. Sed
          euismod, nisl vel tincidunt aliquam, nunc nisl condimentum nunc, nec
          ultrices nunc ante nec nisl. Nulla facilisi.
        </p>
      </div>
      <hr />
      <div className="space-y-2 font-sans">
        <h1 className="text-3xl font-bold tracking-tight">
          This is Cabinet Grotesk
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nunc nisl
          condimentum nunc, nec ultrices nunc ante nec nisl. Nulla facilisi. Sed
          euismod, nisl vel tincidunt aliquam, nunc nisl condimentum nunc, nec
          ultrices nunc ante nec nisl. Nulla facilisi.
        </p>
      </div>
    </div>
  );
}

function Featured() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex items-end justify-center -space-x-8 py-32">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={`${
              selected === i
                ? "z-10 scale-125"
                : `z-0 scale-95 hover:scale-100 ${
                    selected > i ? "-rotate-6" : "rotate-6"
                  }`
            } cursor-pointer transition-all transform`}
          >
            <EventCard />
          </div>
        ))}
    </div>
  );
}
