import { format } from "date-fns";
import Image from "next/image";

import urlFor from "@/sanity/lib/urlFor";
import Link from "next/link";

export default function EventCard({ data = null, colors }) {
  const date = new Date(data?.date);

  return (
    <Link href={`/events/${data?.slug}`}>
      <div
        className="shrink-0 md:hover:scale-110 transition-transform transform box-border border-2 shadow-2xl rounded-4xl w-64 overflow-hidden font-display"
        style={{
          borderColor: colors[1] || "black",
          backgroundColor: colors[3] || "white",
        }}
      >
        <div
          className="px-4 pb-4 pt-8 w-full flex flex-col items-start justify-between space-y-6"
          style={{
            color: colors[1] || "black",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="space-y-2">
            <h2 className="font-bold text-9/2xl tracking-tightest">
              {data?.date ? format(date, "MMM dd") : "Feb 07"}
            </h2>
            <div className="space-y-1">
              <h3 className="font-semibold">
                {data?.title || "This is the title of the event"}
              </h3>
              <p
                className="text-sm line-clamp-2"
                style={{
                  color: colors[1] || "black",
                }}
              >
                And this is the text that accompanies it.
              </p>
            </div>
          </div>
          <p className="text-xs font-medium uppercase">
            {data?.date ? format(date, "MMM dd, yyyy") : "Feb 07, 2021"} •
            Seattle, WA
          </p>
        </div>
        <div
          className="relative h-56 border-t-2  border-dashed"
          style={{
            borderColor: colors[1] || "black",
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
          <div className="hover:bg-gray-200 cursor-pointer transition-colors absolute bottom-2 right-2 border border-gray-300 bg-white text-gray-500 text-xs rounded-full px-4 pt-2.5 pb-3 tracking-tight">
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
