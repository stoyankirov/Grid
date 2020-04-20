import React from 'react'

function Tr(props) {
    return (
        <tr>
            <td className="delete" onClick={props.clickHandler}>{props.rowData['id']}</td>
            <td>{props.rowData['first_name']}</td>
            <td>{props.rowData['last_name']}</td>
            <td><a href={`mailto: ${props.rowData['email']}`}>{props.rowData['email']}</a></td>
            <td>{props.rowData['job_title']}</td>
            <td className="filter" onClick={props.clickHandler}>{props.rowData['department']}</td>
        </tr>
    )
}

export default Tr