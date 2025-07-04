import './GuildCard.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import PageTitle from "../../components/pageTitle/PageTitle.jsx";
import React from "react";

function GuildCard() {
    return (
        <>
            <Book>
                <Page className="leftPage">
                    <PageTitle title="Guild Card"/>
                </Page>
                <Page className="rightPage">
                </Page>

            </Book>
        </>
    )
}

export default GuildCard;