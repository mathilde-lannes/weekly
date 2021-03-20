import * as React from "react";
import {useTranslation} from 'react-i18next';
import {EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle} from '@elastic/eui';


const Projects = () => {
    const {t} = useTranslation();

    const projectsTranslation: any = t("projects", {returnObjects: true})
    const projects = projectsTranslation
        .map(project => (
            <EuiFlexItem key={project.name}>
                <EuiCard
                    icon={<img alt="project-logo" className="emoji" src={`/icons/${project.logo}`}/>}
                    title={project.name}
                    display="plain"
                    description={<span>
                        {project.description}
                        <EuiSpacer size={"xs"}/>
                        <span className={"highlighted"}>{project.highlighted}</span>
                    </span>}
                />
            </EuiFlexItem>
        ))

    return (
        <div id="projects">
            <EuiTitle>
                <h3><b>{t("projectsLabel")} </b></h3>
            </EuiTitle>

            <EuiSpacer size={"xs"}/>

            <EuiFlexGroup gutterSize="l">
                {projects}
            </EuiFlexGroup>
        </div>
    );
}

export default Projects;
