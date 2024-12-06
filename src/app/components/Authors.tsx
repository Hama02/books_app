import { cn } from "@/utils/clsx";
import AuthorCard from "../components/AuthorCard";

const authors = [
  {
    id: 1,
    name: "Clive Cussler",
    bookCount: 3,
  },
  { id: 2, name: "Justin Scott", bookCount: 7 },
  { id: 3, name: "Author Name 3", bookCount: 2 },
  { id: 4, name: "Author Name 4", bookCount: 4 },
  { id: 5, name: "Author Name 5", bookCount: 5 },
  { id: 6, name: "Author Name 6", bookCount: 2 },
];

const getGridClass = (index: number) => {
  switch (index) {
    case 0:
      return "col-span-1 sm:col-span-2 bg-[#f2f2eb80]";
    case 1:
    case 2:
      return `h-32 col-span-1 ${
        index === 1 ? "bg-[#ecebf280]" : index === 2 ? "bg-[#ebf2f280]" : ""
      }`;
    case 3:
      return "col-span-1 sm:col-span-2 bg-[#ebf2ee80]";
    case 4:
    case 5:
      return `h-32 col-span-1 ${
        index === 4 ? "bg-[#f2ebf080]" : index === 5 ? "bg-[#ebeff280]" : ""
      }`;
    default:
      return "col-span-1 sm:col-span-2 bg-[#f2f2eb80]";
  }
};

export default function Authors() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {authors.map((author, index) => (
          <div
            key={index}
            className={cn(
              getGridClass(index),
              "rounded-xl border-2 border-[#ECECE3]"
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
