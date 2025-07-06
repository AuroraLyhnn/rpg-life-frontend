import "./PageTitle.css"

function PageTitle({title}) {
    return(
        <div className="title-area-component">
            <h1 className="page-title">{title}</h1>
        </div>

        );

}
export default PageTitle;