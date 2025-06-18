import './HeroQuest.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";

function HeroQuest() {
    return (
        <>
            <Book>
                <Page className="leftPage">
                    <h1>Hero quest page!</h1>
                </Page>
                <Page className="rightPage">

                </Page>

            </Book>
        </>
    )
}

export default HeroQuest;