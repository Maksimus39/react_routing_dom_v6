import React from 'react';
import {useParams} from "react-router-dom";
import {abibasArr} from "./Abibas";

export const ModelAbibas = () => {
    const params = useParams()
    console.log(params)
    return (
        <div style={{textAlign: "center"}}>
            <h2>{abibasArr[Number(params.id) - 1].model}</h2>
            <h4>{abibasArr[Number(params.id) - 1].collection}</h4>
            <h4>{abibasArr[Number(params.id) - 1].price}</h4>
            <img src={abibasArr[Number(params.id) - 1].picture}
                 style={{width: '300', height: 'auto', marginRight: '10px'}}
                 alt={''}/>
        </div>
    );
};

