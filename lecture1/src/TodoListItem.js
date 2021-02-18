import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'
import * as React from 'react';

// https:flexboxfroggy.com
const TodoListItem = () => {

    return (
        <div className = "ToListItem">
            <div className = "checkBox">
                <MdCheckBoxOutlineBlank/>
                <div className = "text">Things to do</div>
            </div>

            <div className = "remove">
                <MdRemoveCircleOutline/>

            </div>
        </div>

    )
}

export default TodoListItem