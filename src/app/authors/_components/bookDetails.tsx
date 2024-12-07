import {
  addBookToReadingList,
  clearSelectedBook,
  removeBookFromReadingList,
} from "@/libs/Features/selectedBookSlice";
import { Book } from "@/libs/Services/types/Book";
import { RootState } from "@/libs/store";
import getAuthorColor from "@/utils/authorColors";
import { BookmarkCheck, EllipsisVertical, OctagonMinus, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  const dispatch = useDispatch();
  const handleClearBook = () => {
    dispatch(clearSelectedBook());
  };

  const readingList = useSelector(
    (state: RootState) => state.selectedBook.readingList
  );
  const isInReadingList = readingList.some((item) => item.title === book.title);

  const handleButtonClick = () => {
    if (isInReadingList) {
      dispatch(removeBookFromReadingList(book.title));
    } else {
      dispatch(addBookToReadingList(book));
    }
  };

  return (
    <>
      <div className="lg:hidden relative z-50 top-7 px-16 flex items-center justify-between w-full">
        <X className="cursor-pointer" onClick={handleClearBook} />
        <h2 className="text-lg font-medium">Book Overview</h2>
        <EllipsisVertical className="cursor-pointer" />
      </div>
      <div className="fixed top-0 left-0 py-16 px-16 lg:p-0 w-full bg-white lg:static flex flex-col gap-4 divide-y-2 lg:w-[400px] xl:w-[800px]">
        <div className="flex flex-col xl:flex-row">
          <div
            style={{ backgroundColor: getAuthorColor(book.author) }}
            className="h-64 rounded-xl flex items-center justify-center flex-1"
          >
            <Image
              src={book.book_image}
              width={120}
              height={120}
              alt={`${book.title}'s alt`}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 px-4 py-3">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p className="text-sm font-light leading-6 text-[#A8A8A8]">
              {book.description}
            </p>
            {isInReadingList ? (
              <div className="flex justify-between items-center mt-12">
                <div className="flex items-center">
                  <BookmarkCheck />
                  <p className="text-sm lg:text-base">
                    Saved in the reading list
                  </p>
                </div>
                <button
                  className="px-6 py-4 rounded-xl bg-transparent flex items-center text-sm lg:text-base border-2"
                  onClick={handleButtonClick}
                >
                  remove
                  <OctagonMinus />
                </button>
              </div>
            ) : (
              <button
                className="mt-auto bg-blue-500 border-blue-500 transition hover:bg-white hover:text-blue-500 border-2 rounded-3xl w-full text-white py-4 px-6"
                onClick={handleButtonClick}
              >
                Add to Reading list
              </button>
            )}
          </div>
        </div>

        <div className="flex pt-4 flex-col lg:flex-row">
          <div
            style={{ backgroundColor: getAuthorColor(book.author) }}
            className="h-32 rounded-xl flex flex-col lg:items-center justify-center flex-1 p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M19 20.0006C19 18.4175 16.8944 17.9979 16.3358 19.4791C14.9846 23.0622 14 26.2675 14 28.0004C14 33.5233 18.4772 38.0004 24 38.0004C29.5228 38.0004 34 33.5233 34 28.0004C34 26.1386 32.8636 22.5773 31.3569 18.674C29.4051 13.6176 28.4293 11.0894 27.2247 10.9532C26.8392 10.9096 26.4187 10.988 26.0748 11.1674C25 11.7283 25 14.4857 25 20.0006C25 21.6574 23.6569 23.0006 22 23.0006C20.3431 23.0006 19 21.6574 19 20.0006Z"
                fill="#DB6F41"
              />
            </svg>
            <p className="text-[#DB6F41]">
              New York Times Best Seller <br />
              <span className="font-light text-sm text-[#00000066]">
                {book.created_date.split(" ")[0]}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1 px-4 py-3">
            <h3 className="font-medium">Details</h3>
            <p className="text-sm font-light leading-6 text-[#A8A8A8]">
              Published:{" "}
              <span className="text-black font-medium">
                {book.created_date.split(" ")[0]}
              </span>
            </p>
            <p className="text-sm font-light leading-6 text-[#A8A8A8]">
              Publisher:{" "}
              <span className="text-black font-medium">{book.publisher}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
