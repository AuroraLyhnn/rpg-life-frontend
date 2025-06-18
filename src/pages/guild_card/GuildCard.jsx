import './GuildCard.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";

function GuildCard() {
    return (
        <>
            <Book>
                <Page className="leftPage">
                    <h1>Guild card page!</h1>
                </Page>
                <Page className="rightPage">

                </Page>

            </Book>
        </>
    )
}

export default GuildCard;