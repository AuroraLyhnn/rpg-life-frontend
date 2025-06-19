import './NewToDoList.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";

function NewToDo() {
    return (
        <Book>
            <Page className="left-page">
                <h1>New Quest List page!</h1>
            </Page>
            <Page className="right-page">

            </Page>

        </Book>
    )
}

export default NewToDo;