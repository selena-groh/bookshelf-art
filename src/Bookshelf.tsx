import books from "./data/books";
import "./Bookshelf.scss";
import Book from "./Book";
import classNames from "classnames";

const Bookshelf = () => {
  // const totalPages = books.reduce(
  //   (runningSum, book) => runningSum + book.numberOfPages,
  //   0
  // );

  const allButLastThreeBooks = books.slice(0, -3);
  const lastThreeBooks = books.slice(-3);

  return (
    <div className="Bookshelf">
      {allButLastThreeBooks.map((book, index) => (
        <div key={book.bookId} className="Bookshelf-bookWrap">
          <Book {...book} />
        </div>
      ))}
      <div className="Bookshelf-endOfBookshelf">
        {lastThreeBooks.map((book, index) => (
          <div
            key={book.bookId}
            className={classNames("Bookshelf-bookWrap", {
              "Bookshelf-bookWrap--isLastBook":
                index === lastThreeBooks.length - 1,
            })}
          >
            <Book {...book} />
          </div>
        ))}
        <div className="Bookshelf-bookWrap Bookshelf-emptyBookShelfSpace"></div>
      </div>
    </div>
  );
};

export default Bookshelf;
