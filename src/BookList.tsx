import books from "./data/books";
import "./BookList.scss";

const BookList = () => {
  return (
    <div>
      <h3>All Books</h3>
      <table className="BookList">
        <thead>
          <tr>
            <th align="left" style={{ width: "60%" }}>
              <h4>Title</h4>
            </th>
            <th align="left">
              <h4>Author</h4>
            </th>
            <th>
              <h4>Pages</h4>
            </th>
            <th align="right">
              <h4>Date Finished</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const dateFinished = new Date(book.dateFinished);
            const printableDateFinished = dateFinished.toLocaleDateString(
              "default",
              { month: "short", day: "numeric", year: "numeric" }
            );
            return (
              <tr key={book.bookId}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td align="right">{book.numberOfPages}</td>
                <td align="right">
                  {book.dateFinished ? printableDateFinished : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
