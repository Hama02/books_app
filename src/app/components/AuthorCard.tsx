import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  id: number;
  name: string;
  bookCount: number;
  imageUrl: string;
}

const AuthorCard = ({ id, name, bookCount, imageUrl }: AuthorCardProps) => {
  return (
    <Link href={`/authors/${id}`}>
      <div className="flex items-center h-20 px-4 py-6 w-full">
        <div className="flex-shrink-0">
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={imageUrl}
            alt={`${name}'s picture`}
            width={64}
            height={64}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-base font-medium text-black ">{name}</h3>
          <p className="text-xs text-gray-700">{bookCount} Books</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorCard;
