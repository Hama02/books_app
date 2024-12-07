"use client";
import { cn } from "@/utils/clsx";
import AuthorCard from "../components/AuthorCard";
import { useFetchAuthorsQuery } from "@/libs/Services/authorsApi";
import getAuthorColor from "@/utils/authorColors";

const getGridClass = (index: number) => {
  switch (index) {
    case 0:
      return "col-span-1 sm:col-span-2";
    case 1:
    case 2:
      return "h-32 col-span-1";
    case 3:
      return "col-span-1 sm:col-span-2";
    case 4:
    case 5:
      return "h-32 col-span-1";
    default:
      return "col-span-1 sm:col-span-2";
  }
};

export default function Authors() {
  const { data: authors, error, isLoading } = useFetchAuthorsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading authors</div>;

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {authors?.map((author, index) => (
          <div
            key={index}
            className={cn(
              getGridClass(index),
              `rounded-xl border-2 border-[#ECECE3] bg-[${getAuthorColor(
                author.name
              )}]`
            )}
          >
            <AuthorCard
              id={author.id}
              name={author.name}
              bookCount={author.bookCount}
              imageUrl={`${"/author" + (index + 1)}.jpeg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
