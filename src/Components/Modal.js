import { Link, useNavigate } from "react-router-dom";
import { useBooks } from "../contexts/SongsContext";

function Modal() {
  const { isShowModal, currentBook, dispatch } = useBooks();

  if (!currentBook) return null;

  const bookImage = currentBook.volumeInfo.imageLinks.thumbnail;

  const bookTitle = currentBook.volumeInfo.title;

  const authors = currentBook.volumeInfo.authors;

  const publisher = currentBook.volumeInfo.publisher;

  const publishedDate = currentBook.volumeInfo.publishedDate;

  const moreInfo = currentBook.volumeInfo.previewLink;

  const description = currentBook.volumeInfo.description;

  if (!isShowModal) return null;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <Link to="/">
            <button
              className="close"
              onClick={() => dispatch({ type: "closeModal" })}
            >
              <i class="fas fa-times"></i>
            </button>
          </Link>
          <div className="inner-box">
            <img src={bookImage} alt="" />
            <div className="info">
              <h1>{bookTitle}</h1>
              <h3>{authors}</h3>
              <h4>
                {publisher}
                <span> : {publishedDate}</span>
              </h4>
              <br />
              <a href={moreInfo}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{description}</h4>
        </div>
      </div>
    </>
  );
}
export default Modal;
