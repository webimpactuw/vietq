import { PortableText } from "@portabletext/react";
import components from "./components";

export default function PortableBody({ content }) {
  return (
    <article className="prose prose-blockquote:border-champagne-500 max-w-none prose-headings:font-display prose-headings:tracking-tighter prose-headings:font-semibold">
      <PortableText value={content} components={components} />
    </article>
  );
}
