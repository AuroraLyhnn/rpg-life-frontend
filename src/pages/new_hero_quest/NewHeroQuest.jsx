import './NewHeroQuest.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";

function NewHeroQuest() {
    return (
        <Book>
            <Page className="leftPage">
                <h1>New Hero quest page!</h1>
            </Page>
            <Page className="rightPage">

            </Page>

        </Book>
    )
}

export default NewHeroQuest;