import './NotFound.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";
import {NavLink} from "react-router-dom";

function PageNotFound() {
    return (
        <Book>
            <Page className="left-page">
                <h1>This page was not found...</h1>
            </Page>
            <Page className="right-page">
                <NavLink className="back-to-home" to="/">Click here to go back to your journal</NavLink>
            </Page>

        </Book>
    )
}

export default PageNotFound;