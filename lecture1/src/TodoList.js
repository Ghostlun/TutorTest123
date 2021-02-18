import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'
import * as React from 'react';
import TodoListItem from './TodoListItem';

// https:flexboxfroggy.com
const TodoList = () => {

    return (
        <div className = "TodoList">
            <TodoListItem/>
            <TodoListItem/>

            <TodoListItem/>

        </div>

    )
}

export default TodoList