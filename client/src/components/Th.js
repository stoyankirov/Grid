import React from 'react'
 
function Th(props) {
    return (
        <th><a className="sort" data-sortby={props.sort} onClick={props.clickHandler}>{props.content}</a></th>
    )
}

export default Th