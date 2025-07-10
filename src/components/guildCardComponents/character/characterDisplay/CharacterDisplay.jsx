import styles from "./CharacterDisplay.module.css"
import Decor from "../../../../assets/page/decoration/decor.png";
import items from '../../../../constants/customisation.json'

function CharacterDisplay() {

    const skinTone = "light";
    const currentJob = "reaper";
    const race = "elf";
    const eyeColor = "red";
    const chosenOutfit = "layered_dress_green";
    const chosenHair = "wavy_white";
    const chosenWeapon = "scythe_pink";
    const chosenShoes = "ballerinas_black";
    const chosenWings = "bat";
    const chosenAccessory = "spikes_black";

    const body = items.filter((item) => {
        return item.type === "body";
    });
    const currentBody = body.find((currentBody) => {
        return currentBody.name === skinTone;
    })
    const eyes = items.filter((item) => {
        return item.type === "eyes";
    })
    const currentEyes = eyes.find((eye) => {
        return eye.name === eyeColor;
    })

    const outfits = items.filter((item) => {
        return item.type === "outfit"
    })

    const currentOutfit = outfits.find((outfit) => {
        return outfit.name === chosenOutfit;
    })

    const hair = items.filter((item) => {
        return item.type === "hair";
    });
    const currentHair = hair.find((currentHair) => {
        return currentHair.name === chosenHair;
    })

    const weapon = items.filter((item) => {
        return item.type === "weapon";
    });
    const currentWeapon = weapon.find((currentWeapon) => {
        return currentWeapon.name === chosenWeapon;
    })

    const shoes = items.filter((item) => {
        return item.type === "shoes";
    });
    const currentShoes = shoes.find((currentShoes) => {
        return currentShoes.name === chosenShoes;
    })
    //
    const wings = items.filter((item) => {
        return item.type === "wings";
    });
    const currentWings = wings.find((currentWings) => {
        return currentWings.name === chosenWings;
    })
    //
    const accessory = items.filter((item) => {
        return item.type === "head_accessory";
    });
    const currentAccessory = accessory.find((currentAccessory) => {
        return currentAccessory.name === chosenAccessory;
    })


    return (
        <div className="character-display">
            <div className="character">
                <img className={styles.main} src={currentBody.parts.main} alt="Character's Body"/>
                <img className={styles.arms} src={currentBody.parts.arms[currentJob]} alt="Character's arms"/>
                {race==="elf" && (
                    <img className={styles.ears} src={currentBody.parts.ears} alt="Character's ears"/>
                    )}
                <img className={styles.eyes} src={currentEyes.image} alt="Characters eyes"/>
                <img className={styles[`back-hair`]} src={currentHair.parts.back} alt="Characters Back of hair"/>
                <img className={styles[`front-hair`]} src={currentHair.parts.front} alt="Characters front of hair"/>
                <img className={styles[`back-dress`]} src={currentOutfit.parts.back} alt="Characters back of outfit"/>
                <img className={styles[`front-dress`]} src={currentOutfit.parts.front} alt="Characters front of outfit"/>
                <img className={styles.sleeves} src={currentOutfit.parts.sleeves[currentJob]} alt="Characters outfits sleeeves"/>
                <img className={styles.weapon} src={currentWeapon.parts.front} alt="Characters front weapon"/>
                {currentWeapon.parts.back !== "nvt" && <img className ={styles[`back-weapon`]} src={currentWeapon.parts.back} alt="Characters back of weapon"/>}
                <img className={styles.shoes} src={currentShoes.image} alt="Characters shoes"/>
                <img className={styles.wings} src={currentWings.image} alt="Characters wings"/>
                <img className={styles.accessory} src={currentAccessory.parts.front} alt="Characters front of accessory"/>
                {currentAccessory.parts.back !== "nvt" && <img className ={styles[`back-accessory`]} src={currentAccessory.parts.back} alt="Characters back of accessory"/>}
            </div>
            <img className={styles.decor} src={Decor} alt="Display decoration "/>
        </div>
        )

}

export default CharacterDisplay;