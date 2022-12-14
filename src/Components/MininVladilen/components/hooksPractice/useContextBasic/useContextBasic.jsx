import {createContext, useState} from 'react';

export const CustomContext = createContext();

function useContextBasic(props) {
  const [books, setBooks] = useState([
    {id:1, title: 'JS'},
    {id:2, title: 'React'},
    {id:3, title: 'NodeJS'},
  ]);

  //add books in collection
  const addBook = (book) => {
    setBooks([book, ...books])   // new book may be forward of colletion
  }

  const removeBook = (id) => {
    setBooks(books.filter(book=> book.id !== id));  //filter equal remove book from collection
  }

  const value = {
    books, 
    addBook,
    removeBook,
  }

  return (
    <CustomContext.Provider>
       {props.children}     {/* //обворачиваем все что прийдет в качестве детей */}
    </CustomContext.Provider>

  );
}

export default useContextBasic;