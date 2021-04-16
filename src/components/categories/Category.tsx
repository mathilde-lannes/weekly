import {connect} from "react-redux";
import {insertCategory} from "../../store/actions";
import {EuiAccordion, EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle} from "@elastic/eui";
import React from "react";

const Category = ({category, todos}) => <EuiFlexItem>
    <EuiAccordion
        className={"category-item"} style={{backgroundColor: category.color}}
        id={category.name}
        buttonContent={category.name}
    >
        <EuiFlexGroup direction="column">
            {todos.map(item => <EuiFlexItem key={item.id}><b>{item.name}</b></EuiFlexItem>)}
        </EuiFlexGroup>
    </EuiAccordion>
</EuiFlexItem>


const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos.filter(todo => todo.category === ownProps.category.name),
    };
};

export default connect(mapStateToProps, { insertCategory })(Category);
