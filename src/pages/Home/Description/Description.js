import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Description = () => {
    let { id } = useParams();
    const [data,setData] = useState("")
    useEffect(() => {
        setData(JSON.parse(sessionStorage.getItem('covid-data')))
    }, [])
    console.log('in desc', id.toLowerCase(),data[0].confirmed);
    return (<>
        <p>{id}</p>
        {/* <p>{data}</p> */}
    </>);
}

export default Description;