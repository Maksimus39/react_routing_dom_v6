import React from 'react';
import {useParams} from "react-router-dom";
import {PumaArr} from "./Puma";

export const ModelPuma = () => {
    const params = useParams()
    console.log(params)
    return (
        <div style={{textAlign: "center"}}>
            <h2>{PumaArr[Number(params.id) - 1].model}</h2>
            <h4>{PumaArr[Number(params.id) - 1].collection}</h4>
            <h4>{PumaArr[Number(params.id) - 1].price}</h4>
            <img src={PumaArr[Number(params.id) - 1].picture}
                 style={{width: '300', height: 'auto', marginRight: '10px'}}
                 alt={''}/>
        </div>
    );
};

