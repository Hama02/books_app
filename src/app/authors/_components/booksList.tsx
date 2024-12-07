import { useFetchBooksQuery } from "@/libs/Services/booksApi";
import React from "react";
import BookCard from "./bookCard";
import { useDispatch } from "react-redux";
import { setSelectedBook } from "@/libs/Features/selectedBookSlice";
import { Book } from "@/libs/Services/types/Book";

interface BooksListProps {
  author: string | undefined;
}

const BooksList = ({ author }: BooksListProps) => {
  const { data: books, isLoading, error } = useFetchBooksQuery(author);
  const dispatch = useDispatch();
  const handleBookClick = (book: Book) => {
    dispatch(setSelectedBook(book));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="mt-5">
      {books?.map((book) => (
        <div key={book.primary_isbn13}>
          <BookCard
            title={book.title}
            publishedDate={book.created_date}
            onClick={() => handleBookClick(book)}
          />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
