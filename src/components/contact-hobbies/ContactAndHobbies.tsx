import * as React from "react";
import {useTranslation} from 'react-i18next';
import {EuiCard, EuiSpacer, EuiText} from '@elastic/eui';


const ContactAndHobbies = () => {
    const {t} = useTranslation();

    const languages: any = t("contact.language", {returnObjects: true})
    const contactDescription = <EuiText textAlign={"left"} size={"s"}>
        <img alt="phone" className="emoji" src={"/icons/telephone.png"}/>️ {t("contact.phone")} <br/>
        <img alt="mail" className="emoji" src={"/icons/envelope.png"}/> {t("contact.email")} <br/>
        <img alt="address" className="emoji" src={"/icons/house.png"}/> {t("contact.address")} <br/>
        <img alt="website" className="emoji" src={"/icons/laptop.png"}/> {t("contact.website")} <br/>
        <img alt="languages" className="emoji"
             src={"/icons/speaking-head.png"}/>️ {languages.join(', ')} <br/>
    </EuiText>

    const hobbies : any = t("hobbies", {returnObjects: true})
    const hobbiesDescription = <EuiText textAlign={"left"} size={"s"}>
        {hobbies.map(hobby => {
                const src = hobby.icon.startsWith("https") ? hobby.icon : "/icons/" + hobby.icon
                return <span key={hobby.value}><img alt="hobby" className="emoji" src={src}/>{hobby.value}<br/></span>
            })}
    </EuiText>

    return (
        <div id="contact-and-hobbies">
            <EuiCard
                description={contactDescription}
                betaBadgeLabel={t("contactLabel")}
                title={""}/>

            <EuiSpacer size={"xl"}/>
            <EuiSpacer size={"xl"}/>
            <EuiSpacer size={"xl"}/>

            <EuiCard
                description={hobbiesDescription}
                betaBadgeLabel={t("hobbiesLabel")}
                title={""}/>

        </div>
    );
}

export default ContactAndHobbies;
