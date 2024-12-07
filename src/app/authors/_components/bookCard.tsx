import { RootState } from "@/libs/store";
import getAuthorColor from "@/utils/authorColors";
import { cn } from "@/utils/clsx";
import { useSelector } from "react-redux";

interface BookCardProps {
  title: string;
  publishedDate: string;
  onClick: () => void;
}

const BookCard = ({ title, publishedDate, onClick }: BookCardProps) => {
  const selectedBook = useSelector(
    (state: RootState) => state.selectedBook.selectedBook
  );
  return (
    <div
      style={{ backgroundColor: getAuthorColor(selectedBook?.author || "") }}
      className={cn(
        selectedBook?.title === title ? "border-2 border-blue-500" : "",
        `flex flex-col mt-4 justify-between h-16 md:h-28 px-4  py-2 md:py-6 md:w-80 w-72 rounded-xl cursor-pointer`
      )}
      onClick={onClick}
    >
      <h3 className="text-base md:text-xl font-medium text-black ">{title}</h3>
      <p className="text-sm font-light text-[#3A5959]">
        Published: {publishedDate.split(" ")[0]}
      </p>
    </div>
  );
};

export default BookCard;
