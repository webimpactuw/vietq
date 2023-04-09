import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

export default function ExitPreview() {
  const [info, setInfo] = useState(false);

  return (
    <div className="inline-flex items-center justify-end space-x-2 fixed bottom-4 right-4">
      {info && (
        <div className="space-y-1 absolute bg-blue-800 text-center border-white/50 border shadow-xl rounded-2xl px-2 py-4 text-white font-display bottom-12 w-full right-0">
          <h3 className="font-semibold tracking-tight">About Preview Mode</h3>
          <p className="text-xs leading-relaxed">
            In preview mode, you modify unpublished content. Certain content
            will not be visible or interactable in preview mode.
          </p>
        </div>
      )}
      <button
        className="inline-flex items-center justify-end bg-blue-800 border-white/50 border shadow-xl rounded-full p-2 text-xs text-white hover:bg-blue-700 transition-colors"
        onClick={() => setInfo(!info)}
      >
        {info ? (
          <XMarkIcon className="w-4 h-4" />
        ) : (
          <InformationCircleIcon className="w-4 h-4" />
        )}
      </button>
      <div className="inline-flex whitespace-nowrap items-center justify-end bg-blue-800 border-white/50 border shadow-xl rounded-full px-4 py-2 text-xs text-white hover:bg-red-700 transition-colors tracking-widest uppercase font-semibold">
        <Link href="/api/exit-preview">Exit Preview Mode</Link>
      </div>
    </div>
  );
}
