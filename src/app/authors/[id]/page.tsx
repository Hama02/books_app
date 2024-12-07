"use client";
import { RootState } from "@/libs/store";
import { useSelector } from "react-redux";
import BookDetails from "../_components/bookDetails";

export default function Books() {
  const selectedBook = useSelector(
    (state: RootState) => state.selectedBook.selectedBook
  );
  return (
    <div className="absolute top-0 left-0 z-40 lg:static mx-auto w-full">
      {selectedBook ? (
        <BookDetails book={selectedBook} />
      ) : (
        <div className="w-full xl:w-[800px] md:w-[400px] bg-[#F7F7F7] h-[460px] items-center justify-center hidden lg:flex">
          <p>Select a book to see details</p>
        </div>
      )}
    </div>
  );
}
