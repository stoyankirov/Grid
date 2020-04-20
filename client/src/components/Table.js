import React, {useEffect, useState} from 'react';
import Thead from './Thead';
import Tbody from './Tbody'
import '../style.css'

const headings = ["Identification", "First Name", "Last Name", "Email", "Position", "Department"];

function Table(props) {
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setKeys(Object.keys(data[0]));
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            })
    },[]);

    function sortBy(key, a, b) {
        if (typeof a[key] === "number") {
            return a[key] - b[key];
        }
        return a[key].localeCompare(b[key]);
    }
    
    function clickHandler(e){
        let criteria = e.target.dataset.sortby;
        if(e.target.classList.contains("sort")){
            setData(data.slice().sort(sortBy.bind(undefined, criteria)));
        }
        else if(e.target.classList.contains("filter")){
            setData(data.filter(x => x["department"] === e.target.innerHTML));
        }
        else if(e.target.classList.contains("delete")){
            setData(data.filter(x => x["id"] !== Number(e.target.innerHTML)));
        }
    }

    return (
        <table>
            <Thead headings={headings} sortby={keys} clickHandler={clickHandler}/>
            <Tbody data={data} clickHandler={clickHandler}/>
        </table>
    )
}

export default Table