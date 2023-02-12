function paperRequirements(book1, book2, book3) {
  const paperForBookOne = book1 * 100;
  const paperForBookTwo = book2 * 200;
  const paperForBookThree = book3 * 300;
  //   let totalBooks = book1 + book2 + book3;
  const totalPapersRequired =
    paperForBookOne + paperForBookTwo + paperForBookThree;
  return totalPapersRequired;
}

const bookOne = 10;
const bookTwo = 12;
const bookThree = 10;

const booksTotal = bookOne + bookTwo + bookThree;

const result = paperRequirements(bookOne, bookTwo, bookThree);
console.log(
  `Total papers required for ${booksTotal} books are : ${result} pieces.`
);
