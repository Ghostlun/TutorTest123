import {MdAdd} from 'react-icons/md'
import * as React from 'react';

// https:flexboxfroggy.com
const TodoInsert = () => {

    return (
        <form className = "TodoInsert">

            <input placeholder = "Preess your works"/>

            <button type ="submit">
                
                <MdAdd/>

            </button>
        </form>

    )
}

export default TodoInsert