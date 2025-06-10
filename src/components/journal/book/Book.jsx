import "./Book.css";
import Bookmarks from "../bookmarks/Bookmarks.jsx";

function Book(props) {
   return (
       <div className="book">
           <Bookmarks />
           {/*Misschien binnen boek 2 verschillende div's voor linker pagina en rechter pagina?*/}
           {props.children}
       </div>
   );
}

export default Book;