import {useContext} from 'react';
import { CustomContext } from '../useContextBasic';
import Book from './Book';

function Books(props) {
  const {books = []} = useContext(CustomContext);
  return (
    <div>
      {
        books.map(book => {
          <Book 
          key={book.id}{...book}
          />
        })
      }
    </div>
  );
}

export default Books;