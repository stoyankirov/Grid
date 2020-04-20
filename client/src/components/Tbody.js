import React from 'react'
import Tr from './Tr'

function Tbody(props) {
    let body = props.data.map(x => <Tr key={x['id']} rowData={x} clickHandler={props.clickHandler}/>);

    return(
        <tbody>
            {body}
        </tbody>
    )
}

export default Tbody