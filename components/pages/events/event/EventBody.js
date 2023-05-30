import PortableBody from "@/components/portableText/PortableBody";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function EventBody({ data }) {
  return (
    <div className="col-span-3 divide-y divide-gray-500">
      <div className="space-y-4 pb-8">
        <h2 className="text-3xl font-bold font-display tracking-tighter">
          About this Event
        </h2>
        {data.content ? (
          <PortableBody content={data.content} />
        ) : (
          <p>There is no information on this event. Please check back later.</p>
        )}
      </div>
      {data.relatedLinks && data.relatedLinks.length > 0 ? (
        <RelatedLinks links={data.relatedLinks} />
      ) : null}
    </div>
  );
}

function RelatedLinks({ links }) {
  return (
    <div className="space-y-4 pt-8">
      <h2 className="text-3xl font-bold font-display tracking-tighter">
        Related Links
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {links.map((link, i) => (
          <LinkCard key={i} link={link} />
        ))}
      </div>
    </div>
  );
}

function LinkCard({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-champagne-700/25 rounded-xl hover:opacity-75 transition-opacity bg-champagne-50 flex items-center space-x-4 justify-start"
    >
      <LinkIcon className="w-6 h-6" />
      <div className="space-y-1">
        <h4 className="font-bold font-display">{link.title}</h4>
        <p className="text-xs text-gray-700">
          {new URL(link.url).hostname.split("www.")[1]}
        </p>
      </div>
    </a>
  );
}
