"use client";
import { useFetchAuthorByIdQuery } from "@/libs/Services/authorsApi";
import Link from "next/link";
import BooksList from "./booksList";
import { clearSelectedBook } from "@/libs/Features/selectedBookSlice";
import { useDispatch } from "react-redux";

interface SideBarProps {
  authorId: number;
}

const SideBar = ({ authorId }: SideBarProps) => {
  const { data: author, isLoading, error } = useFetchAuthorByIdQuery(authorId);
  const dispatch = useDispatch();
  const handleClearBook = () => {
    dispatch(clearSelectedBook());
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="w-1/3 pl-32 flex flex-col border-r-2 min-h-screen">
      <Link className="py-4 mt-11" href={"/explore"} onClick={handleClearBook}>
        <h2 className="flex items-center cursor-pointer gap-2 text-[#6C6C6C]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.7794 20L8.15627 12.3769C8.10673 12.3274 8.06743 12.2687 8.04062 12.204C8.0138 12.1393 8 12.07 8 12C8 11.93 8.0138 11.8607 8.04062 11.796C8.06743 11.7313 8.10673 11.6726 8.15627 11.6231L15.7794 4"
              stroke="#6C6C6C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Explore
        </h2>
      </Link>

      <div className="mt-6 ml-2 flex flex-col">
        <p className="text-xl">{author?.name}</p>
        <span className="font-light text-sm text-[#7E7E7E]">
          Select a book to see details
        </span>
        <BooksList author={author?.name} />
      </div>
    </div>
  );
};

export default SideBar;
