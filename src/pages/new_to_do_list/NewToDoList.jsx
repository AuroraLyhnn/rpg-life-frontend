import './NewToDoList.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";

function NewToDo() {
    return (
        <Book>
            <Page className="leftPage">
                <h1>New Quest List page!</h1>
            </Page>
            <Page className="rightPage">

            </Page>

        </Book>
    )
}

export default NewToDo;