import './Page.css'

function Page({children, className = ""}) {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
}

export default Page;