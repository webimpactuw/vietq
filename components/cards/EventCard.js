import Image from "next/image";

import urlFor from "@/sanity/lib/urlFor";
import Link from "next/link";

export default function EventCard({ data = null, colors, date }) {
  return (
    <Link href={`/events/${data?.slug}`}>
      <div
        className="shrink-0 md:hover:scale-110 transition-transform transform box-border border-2 shadow-2xl rounded-4xl w-64 overflow-hidden font-display"
        style={{
          borderColor: colors["800"].color || "black",
          backgroundColor: colors["200"].color || "white",
        }}
      >
        <div
          className="relative px-4 pb-4 pt-8 w-full flex flex-col items-start justify-between space-y-4"
          style={{
            color: colors["900"].color || "black",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div
            className="absolute right-4 top-4 text-xs px-2 pt-0.5 pb-1 rounded-full"
            style={{
              backgroundColor: colors["900"].color || "black",
              color: colors["200"].color || "white",
            }}
          >
            {date.daysLeft > 0
              ? `${date.daysLeft} days left`
              : date.daysLeft == 0
              ? "Today"
              : "Past"}
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-9/2xl tracking-tightest">
              {date.short}
              {date.end ? (
                <span className="text-2xl tracking-tight">{date.end}</span>
              ) : null}
            </h2>
            <div className="space-y-1">
              <h3 className="font-semibold">
                {data?.title || "This is the title of the event"}
              </h3>
              <p
                className="text-sm line-clamp-2"
                style={{
                  color: colors["800"].color || "black",
                }}
              >
                This is the description that continues and containThis is the
                description that continues and containThis is the description
                that continues and contain
              </p>
            </div>
          </div>
          <p className="text-xs font-medium uppercase">
            {date.long} • Seattle, WA
          </p>
        </div>
        <div
          className="relative h-56 border-t-2  border-dashed"
          style={{
            borderColor: colors["800"].color || "black",
          }}
        >
          {data?.image && (
            <Image
              src={urlFor(data.image).auto("format").size(1000, 1000).url()}
              alt={data?.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              blurDataURL={data.image.lqip}
              placeholder="blur"
            />
          )}
          <div
            style={{
              borderColor: colors["400"].color || "black",
              color: colors["800"].color || "black",
              backgroundColor: colors["100"].color || "white",
            }}
            className="hover:bg-gray-200 cursor-pointer transition-colors absolute bottom-2 right-2 border border-gray-300 bg-white text-gray-500 text-xs rounded-full px-4 pt-2.5 pb-3 tracking-tight font-medium"
          >
            Learn more
          </div>
        </div>
      </div>
    </Link>
  );
}

// export default function EventCard({ data }) {
//   return (
//     <div className="shrink-0 md:hover:scale-110 transition-transform transform box-border border-2 border-yellow-600 shadow-2xl rounded-4xl w-64 overflow-hidden font-display">
//       <div
//         className="px-4 pb-4 pt-8 bg-yellow-100 text-yellow-800 w-full flex flex-col items-start justify-between space-y-6"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
//         }}
//       >
//         <div className="space-y-2">
//           <h2 className="font-bold text-9/2xl tracking-tightest">Feb 07</h2>
//           <div className="space-y-1">
//             <h3 className="font-semibold">This is the event name...</h3>
//             <p className="text-sm text-yellow-600 line-clamp-2">
//               And this is the text that accompanies it.
//             </p>
//           </div>
//         </div>
//         <p className="text-xs font-medium uppercase">2/7/2023 • Seattle, WA</p>
//       </div>
//       <div className="bg-yellow-400 relative h-56 border-t-2 border-yellow-600 border-dashed">
//         {/* <img
//           src="https://picsum.photos/seed/picsum/900/900"
//           className="w-full h-full object-cover"
//         /> */}
//         <div className="hover:bg-gray-200 cursor-pointer transition-colors absolute bottom-2 right-2 border-2 border-yellow-600 bg-white text-gray-500 text-xs rounded-full px-4 pt-2.5 pb-3 tracking-tight">
//           Learn more
//         </div>
//       </div>
//     </div>
//   );
// }
