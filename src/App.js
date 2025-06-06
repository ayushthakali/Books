 import { useState } from "react"
 import BookCreate from "./components/BookCreate";
 import BookList from "./components/BookList";
 import axios from "axios";
 import { useEffect  } from "react";

 const App = () => {
    const [books,setBooks] = useState([]);
    
    const fetchBooks =async () => {
      const res = await axios.get('http://localhost:3001/books');
      setBooks(res.data);
    };

    useEffect(() => {
      fetchBooks()
    }, []);

    const deleteByID = async (id)=>{
      await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks=books.filter((book)=>{
          return book.id !==id;
        });
        setBooks(updatedBooks);
    }

    const editBookById= async (id,newTitle)=>{
      const res = await axios.put(`http://localhost:3001/books/${id}`,{
        title: newTitle
      });

        const updatedBooks= books.map((book)=>{
          if(book.id===id){
            return ({...book,...res.data})
          }
          return book;
        })

        setBooks(updatedBooks);
    }

    const createBook = async (title)=>{
      const res = await axios.post('http://localhost:3001/books', {
        title,
      });
      const updatedBooks=[
        ...books,
        res.data
      ]
        setBooks(updatedBooks);
    };

    return (
    <div className="app">
      <h1>Reading List</h1>
        <BookList books={books} onEdit={editBookById} onDelete={deleteByID}/>
        <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;