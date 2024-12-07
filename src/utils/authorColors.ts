const authorColors: { [author: string]: string } = {
  "Clive Cussler": "#f2f2eb80",
  "Kristin Hannah": "#ecebf280",
  "Percival Everett": "#ebf2f280",
  "James Patterson": "#ebf2ee80",
  "Janet Evanovich": "#f2ebf080",
  "Nicholas Sparks": "#ebeff280",
};

const getAuthorColor = (author: string): string => {
  return authorColors[author] || "#f2f2eb80";
};

export default getAuthorColor;
