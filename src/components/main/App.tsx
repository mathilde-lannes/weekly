import React, {useEffect} from 'react';

import {EuiFlexGroup, EuiFlexItem} from "@elastic/eui";
import Schedule from "../schedule/Schedule";
import {connect} from "react-redux";
import {getAllCategories, getAllTodos, insertCategory} from "../../store/actions";
import Categories from '../categories/Categories';

function App({todos, categories, insertCategory, getAllCategories, getAllTodos}) {

    useEffect(() => {
        getAllCategories()
        getAllTodos()
    }, [getAllCategories, getAllTodos])

    return (
        <EuiFlexGroup id={"main-container"}>
            <EuiFlexItem>
                <Schedule todos={todos}/>
            </EuiFlexItem>
            <EuiFlexItem>
                <Categories categories={categories} insertCategory={insertCategory}/>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        categories: state.categories,
    };
};

export default connect(mapStateToProps, {insertCategory, getAllTodos, getAllCategories})(App);
