import Modal from "./Modal";
import { useBooks } from "../contexts/SongsContext";
import { Link } from "react-router-dom";

function BookItem() {
  const { books, dispatch } = useBooks();

  return (
    <>
      {books?.map((book) => {
        let thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
        let amount = book.saleInfo.listPrice;
        if (thumbnail !== undefined || amount !== undefined) {
          return (
            <>
              <Link to={`modal/${book.id}`}>
                <div
                  className="card"
                  onClick={() =>
                    dispatch({ type: "openModal", payload: book.id })
                  }
                >
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    key={book.id}
                  />
                  <div className="bottom">
                    <h3 className="title">{book.volumeInfo.title}</h3>
                    <p className="amount">&#8377;{book.saleInfo.saleability}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        }
      })}
      <Modal />
    </>
  );
}

export default BookItem;
