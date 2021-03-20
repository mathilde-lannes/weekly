import * as React from "react";
import { useTranslation } from 'react-i18next';
// @ts-ignore
import avatar from "../../assets/me.jpg";
// @ts-ignore
import * as _ from "lodash";
import { EuiTitle, EuiText, EuiFlexGroup, EuiFlexItem, EuiBadge,
    euiPaletteColorBlindBehindText } from '@elastic/eui';


const Skills = () => {
    const { t } = useTranslation();
    const skills: any = t('skills', { returnObjects: true })

    const palette = euiPaletteColorBlindBehindText({ sortBy: 'natural' })
    const categories = _.uniq(_.map(skills, 'category'))
    const colorsByCategory = categories.reduce((acc, val, i)=> {
        acc[val] = palette[i]
        return acc
    }, {})

    return <EuiFlexGroup wrap responsive={false} gutterSize="xs" className="skills">
        {skills.map(({label, category}) => (
            <EuiFlexItem grow={false} key={label}>
                <EuiBadge color={colorsByCategory[category]}>{label}</EuiBadge>
            </EuiFlexItem>))}
    </EuiFlexGroup>
};

function Header() {
    const { t } = useTranslation();

    return (
        <EuiFlexGroup id={"header-container"}>
            <EuiFlexItem className={"presentation"}>
                <EuiTitle>
                    <h1><b>{t("firstname") + " " + t("lastname")} </b> <img alt="woman-laptop" className="emoji" src={"/icons/woman-laptop.png"}/></h1>
                </EuiTitle>
                <EuiText color="subdued">
                    <p>{t("headline")}</p>
                </EuiText>
                <Skills />
            </EuiFlexItem>
            <EuiFlexItem className={"avatar"} grow={false}>
                <img src={avatar} alt={"picture"}/>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

export default Header;
