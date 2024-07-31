import React from 'react';
import {useParams} from "react-router-dom";
import {abibasArr} from "./Abibas";

export const ModelAbibas = () => {
    const params = useParams()

    const currentModel = abibasArr.find(el => el.id === Number(params.id))
    return (
        <div style={{textAlign: "center"}}>
            {currentModel
                ? <>
                    <h2>{abibasArr[Number(params.id)].model}</h2>
                    <h4>{abibasArr[Number(params.id)].collection}</h4>
                    <h4>{abibasArr[Number(params.id)].price}</h4>
                    <img src={abibasArr[Number(params.id)].picture}
                         style={{width: '300', height: 'auto', marginRight: '10px'}}
                         alt={''}/>
                </>
                : <h2>ТАКОЙ МОДЕЛИ КРОССОВОК НЕ СУЩЕСТВУЕТ</h2>
            }
        </div>

    );
};

