import { SongsProvider, useBooks } from "../contexts/SongsContext";
import AllBooks from "./AllBooks";
import BookItem from "./BookItem";

const Main = () => {
  const { search, dispatch, isShowModal } = useBooks();

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) =>
                dispatch({ type: "searchBook", payload: e.target.value })
              }
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg1.png" alt="" />
        </div>
      </div>

      <div className="container">{<BookItem />}</div>
    </>
  );
};
export default Main;
