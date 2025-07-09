import './LogoPage.css'
import AppLogo from "../../../assets/page/decoration/application-logo.png";

function LogoPage() {
    return (
        <div className="logo-page">
            <img className="logo" src={AppLogo} alt="Application logo"/>
        </div>
    );
}

export default LogoPage;