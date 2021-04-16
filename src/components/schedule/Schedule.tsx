import React from 'react';
import {EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle} from "@elastic/eui";
import moment, {Moment} from "moment";
import {Todo} from "../../models/todo";

type Section = {
    name: string;
    description: string;
    items: Todo[];
}
const Day = ({section}) => <EuiFlexItem>
    <EuiTitle size={"s"}><h4>{section.name}</h4></EuiTitle>
    <EuiText size={"s"} color={"subdued"}>{section.description}</EuiText>

    <EuiFlexGroup direction="column">
        {section.items.map(item => <EuiFlexItem key={item.id}><b>{item.name}</b></EuiFlexItem>)}
    </EuiFlexGroup>
</EuiFlexItem>

function Schedule({todos}) {

    const getNameFromDate = (date: Moment, i: number) => {
        if (i === 0) {
            return 'Today'
        } else if (i === 1) {
            return 'Tomorrow'
        } else {
            return date.format("dddd")
        }
    }

    const getWeekdays = () => {
        let days = []
        let i = 0
        while (i < 7) {
            const day = moment().clone().add(i, "d")
            const section = {
                name: getNameFromDate(day, i),
                description: day.format("MMM, Do"),
                items: todos.filter(todo => day.isSame(moment(todo.assignedDate), "day"))
            }

            days.push(section)
            i++
        }

        return days
    }

    const weekdays: Section[] = getWeekdays()

    return (
        <>
            <EuiTitle><h2>Schedule</h2></EuiTitle>
            <EuiText color={"subdued"}>Actions of the week</EuiText>

            <EuiFlexGroup direction="column">
                {weekdays.map(day => <Day key={day.name} section={day}/>)}
            </EuiFlexGroup>
        </>
    );
}

export default Schedule;
