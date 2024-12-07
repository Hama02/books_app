"use client";
import { RootState } from "@/libs/store";
import { useSelector } from "react-redux";
import BookDetails from "../_components/bookDetails";

export default function Books() {
  const selectedBook = useSelector(
    (state: RootState) => state.selectedBook.selectedBook
  );
  console.log(selectedBook);
  return (
    <>
      {selectedBook ? (
        <BookDetails book={selectedBook} />
      ) : (
        <div className="lg:w-[800px] w-1/3 bg-[#F7F7F7] h-[460px] flex items-center justify-center">
          <p>Select a book to see details</p>
        </div>
      )}
    </>
  );
}
