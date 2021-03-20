import * as React from "react";
import { useTranslation } from 'react-i18next';
import * as _ from "lodash";
// @ts-ignore
import workIcon from '../../assets/briefcase.png';
import {
    EuiTitle, EuiComment, EuiSpacer
} from '@elastic/eui';
// @ts-ignore
import * as moment from "moment/min/moment-with-locales";
import { LANGUAGE } from "../main/App";


const Experiences = () => {
    const { t } = useTranslation();
    moment.locale(LANGUAGE)

    const buildComment = experience => {
        const icon = experience.type === "formation" ? "training" :
            (experience.type === "experience" && experience.description ? workIcon : null)

        const start = moment(experience.startDate).format("MMMM YYYY")
        const endMoment = moment(experience.endDate)
        const end = endMoment.isValid() ? endMoment.format("MMMM YYYY") : t("now")
        const date = start === end ? endMoment.format("YYYY") : start + " - " + end

        return <EuiComment key={experience.title}
            username={experience.title + " " + experience.company}
            type={experience.description ? "regular" : "update"}
            timestamp={date}
            timelineIcon={icon}>
            <div dangerouslySetInnerHTML={{__html: experience.description}}/>
        </EuiComment>
    }

    const experiences: any = t('experiences', { returnObjects: true })
    const formation: any = t('formation', { returnObjects: true })
    const items = experiences.map(exp => ({...exp, type: "experience"}))
        .concat(formation.map(formation => ({...formation, type: "formation"})))
    const sortedItems = _.sortBy(items, "startDate").reverse()

    return (
        <div id="experiences-and-formation">
            <EuiTitle>
                <h3><b>{t("experiencesLabel")} </b></h3>
            </EuiTitle>

            <EuiSpacer />

            {sortedItems.map(buildComment)}
        </div>
    );
}

export default Experiences;
