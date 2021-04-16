import React from 'react';
import {EuiButton, EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle} from "@elastic/eui";
import Category from "./Category";

function Categories({categories, insertCategory}) {
    return (
        <>
            <EuiTitle><h2>Categories</h2></EuiTitle>
            <EuiText color={"subdued"}>Organize your tasks.</EuiText>

            <EuiFlexGroup direction="column">
                {categories.map(cat => <Category key={cat.name} category={cat}/>)}
                <EuiFlexItem>
                    <EuiButton className={"add-category-btn"} onClick={() => insertCategory("Test", "#DD0A73")}>Add category</EuiButton>
                </EuiFlexItem>
            </EuiFlexGroup>

        </>
    );
}

export default Categories;
