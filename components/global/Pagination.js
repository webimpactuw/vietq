import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({ pageCount, setPageIndex }) {
  return (
    <ReactPaginate
      previousLabel={
        <ChevronLeftIcon className="h-6 w-6 text-gray-900 hover:text-gray-700 transition-colors" />
      }
      nextLabel={
        <ChevronRightIcon className="h-6 w-6 text-gray-900 hover:text-gray-700 transition-colors" />
      }
      breakLabel="..."
      breakClassName="flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-900/10 cursor-pointer transition-colors"
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(e) => setPageIndex(e.selected)}
      containerClassName="flex justify-center items-center space-x-4"
      pageClassName="flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-900/10 cursor-pointer transition-colors font-medium font-display"
      pageLinkClassName="-mt-0.5"
      activeClassName="bg-gray-900 flex justify-center items-center border border-gray-900 w-8 h-8 text-white hover:!bg-gray-700"
    />
  );
}
