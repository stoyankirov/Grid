import React from 'react'
import Th from './Th'

function Thead(props) {
    let ths = [];
    for(let i= 0;i < props.headings.length; i++){
        ths.push(<Th content={props.headings[i]} sort={props.sortby[i]} clickHandler={props.clickHandler}/>)
    }
    return (
        <thead>
            <tr>
                {ths}
            </tr>
        </thead>
    )
}  

export default Thead