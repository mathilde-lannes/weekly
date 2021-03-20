import * as React from "react";
import Header from "../header/Header";
import {EuiFlexGroup, EuiFlexItem, EuiSpacer} from "@elastic/eui";
import Experiences from "../experiences/Experiences";
import ContactAndHobbies from "../contact-hobbies/ContactAndHobbies";
import Projects from "../projects/Projects";

export const LANGUAGE = "en";


export default () => (
    <div id="main-container">
        <Header />

        <EuiFlexGroup className={"main-section"}>
            <EuiFlexItem grow={7}>
                <Experiences />
            </EuiFlexItem>
            <EuiFlexItem grow={3}>
                <ContactAndHobbies />
            </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer />

        <Projects/>
    </div>
);
