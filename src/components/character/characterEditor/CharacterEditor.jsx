import "./CharacterEditor.css"
import Body from "../../../assets/character/body/light/body.png";
import Arms from "../../../assets/character/body/light/arms_staff_sword.png";
import Ears from "../../../assets/character/body/light/ears.png";
import Eyes from "../../../assets/character/eyes/blue.png";
import BackHair from "../../../assets/character/hair/long/grey_back.png";
import FrontHair from "../../../assets/character/hair/long/grey_front.png";
import BackDress from "../../../assets/character/outfit/layered_dress/back.png";
import FrontDress from "../../../assets/character/outfit/layered_dress/green_front.png";
import Sleeves from "../../../assets/character/outfit/layered_dress/green_sleeves_staff.png";
import Weapon from "../../../assets/character/weapon/staff/moonfairy.png";
import Shoes from "../../../assets/character/shoes/sandals_green.png";
import Wings from "../../../assets/character/wings/ice.png";

function CharacterEditor() {
    return (
        <div className="character-editor">
            {/*<div className="left-buttons"*/}
            <div className="character">
                <img className="body" src={Body}/>
                <img className="arms" src={Arms}/>
                <img className="ears" src={Ears}/>
                <img className="eyes" src={Eyes}/>
                <img className="back-hair" src={BackHair}/>
                <img className="front-hair" src={FrontHair}/>
                <img className="back-dress" src={BackDress}/>
                <img className="front-dress" src={FrontDress}/>
                <img className="sleeves" src={Sleeves}/>
                <img className="weapon" src={Weapon}/>
                <img className="shoes" src={Shoes}/>
                <img className="wings" src={Wings}/>
            </div>
            {/*<div className="right-buttons">*/}
            {/*    <button className type="button"></button>*/}
            {/*</div>*/}
        </div>
        )

}

export default CharacterEditor;