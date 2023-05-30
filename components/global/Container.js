export default function Container({ children, id = null }) {
  return (
    <div id={id} className="mx-auto max-w-6xl py-8 px-4 space-y-4">
      {children}
    </div>
  );
}
