import Container from "@/components/global/Container";

import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import { Fragment } from "react";

import { useState } from "react";

export default function PastEvents() {
  const [currentType, setCurrentType] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <div className="pt-24 pb-32 relative z-10">
        <div className="space-x-8 flex items-end justify-between w-full">
          <div>
            <h4 className="text-gray-500 font-medium text-lg">15 events</h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest font-display leading-tight whitespace-nowrap">
              Past Events
            </h2>
          </div>
          <div className="w-full">
            <div className="relative flex items-center w-full">
              <MagnifyingGlassIcon
                className={`w-4 h-4 absolute top-50 left-4`}
              />
              <input
                type="text"
                placeholder="Search for an event"
                className="border text-sm w-full rounded-full pt-3.5 pr-4 pl-10 pb-4  h-12 font-display transition-colors placeholder-gray-500 text-gray-900 bg-white border-champagne-700/25 focus:outline-blue-700 hover:bg-gray-100"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </Container>
  );
}

// function ContentTypeFilterDropdown({ currentType, setCurrentType }) {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center text-gray-900 items-center tracking-tighter text-sm font-medium px-2.5 pt-0.5 pb-1 rounded-full hover:bg-champagne-700/5">
//           {currentType ? currentType.name : "Resource Type"}
//           <ChevronDownIcon
//             className="ml-1 mt-1 h-5 w-5 text-gray-700 hover:text-gray-900"
//             aria-hidden="true"
//           />
//         </Menu.Button>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="px-1 py-1 ">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={`${
//                     active ? "bg-violet-500 text-white" : "text-gray-900"
//                   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                 >
//                   Edit
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={`${
//                     active ? "bg-violet-500 text-white" : "text-gray-900"
//                   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                 >
//                   Duplicate
//                 </button>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="px-1 py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={`${
//                     active ? "bg-violet-500 text-white" : "text-gray-900"
//                   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                 >
//                   Archive
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={`${
//                     active ? "bg-violet-500 text-white" : "text-gray-900"
//                   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                 >
//                   Move
//                 </button>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="px-1 py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={`${
//                     active ? "bg-violet-500 text-white" : "text-gray-900"
//                   } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                 >
//                   Delete
//                 </button>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
