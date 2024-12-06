import { Author } from "@/libs/Services/types/Author";

const authors: Author[] = [
  {
    id: 1,
    name: "Clive Cussler",
    bookCount: 3,
    imageUrl: "/images/clive-cussler.jpg",
  },
  {
    id: 2,
    name: "Justin Scott",
    bookCount: 7,
    imageUrl: "/images/justin-scott.jpg",
  },
  {
    id: 3,
    name: "Author Name 3",
    bookCount: 3,
    imageUrl: "/images/author3.jpg",
  },
  {
    id: 4,
    name: "Author Name 4",
    bookCount: 5,
    imageUrl: "/images/author4.jpg",
  },
  {
    id: 5,
    name: "Author Name 5",
    bookCount: 8,
    imageUrl: "/images/author5.jpg",
  },
  {
    id: 6,
    name: "Author Name 6",
    bookCount: 1,
    imageUrl: "/images/author6.jpg",
  },
];

export async function GET() {
  return Response.json(authors);
}
