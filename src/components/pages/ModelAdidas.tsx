import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";

export const ModelAdidas = () => {
    const params = useParams()
    console.log(params)
    return (
        <div style={{textAlign: "center"}}>
            <h2>{adidasArr[Number(params.id) - 1].model}</h2>
            <h4>{adidasArr[Number(params.id) - 1].collection}</h4>
            <h4>{adidasArr[Number(params.id) - 1].price}</h4>
            <img src={adidasArr[Number(params.id) - 1].picture}
                 style={{width: '300', height: 'auto', marginRight: '10px'}}
                 alt={''}/>
        </div>
    );
};

