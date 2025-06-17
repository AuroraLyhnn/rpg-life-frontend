import "./Book.css";
import Bookmarks from "../bookmarks/Bookmarks.jsx";

function Book(props) {
   return (
       <div className="book bg-style">
           <Bookmarks />
           <div className="pages">
            {props.children}
           </div>
       </div>
   );
}

export default Book;