import './Page.css'

function Page({children, className = ""}) {
    return (
        <div className={`Container ${className}`}>
            {children}
        </div>
    );
}

export default Page;