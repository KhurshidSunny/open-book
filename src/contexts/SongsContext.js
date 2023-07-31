import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  books: [],
  currentBook: null,
  search: "",
  isShowModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "load/books":
      return {
        ...state,
        books: action.payload,
      };
    case "searchBook":
      return {
        ...state,
        search: action.payload,
      };
    case "closeModal":
      return {
        ...state,
        isShowModal: false,
      };
    case "openModal":
      return {
        ...state,
        isShowModal: true,
        curBookId: action.payload,
        currentBook: state.books.find((book) => book.id === action.payload),
      };
    default:
      throw new Error("Unknown Action");
  }
}

const KEY = "AIzaSyBULx9lbYIi8wht-8AF0ZDRRVbdvnBodOc";

const SongsContext = createContext();

function SongsProvider({ children }) {
  const [{ books, book, search, isShowModal, currentBook }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      async function fetchBooks() {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${KEY}`
        );
        const data = await res.json();

        dispatch({ type: "load/books", payload: data.items });
      }
      fetchBooks();
    },
    [search]
  );

  return (
    <SongsContext.Provider
      value={{
        books,
        book,
        search,
        currentBook,
        isShowModal,
        dispatch,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

function useBooks() {
  const context = useContext(SongsContext);
  if (context === undefined)
    throw new Error("The Book context is used outside the provider");
  return context;
}

export { SongsProvider, useBooks };
