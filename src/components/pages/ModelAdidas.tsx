import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";
import {abibasArr} from "./Abibas";

export const ModelAdidas = () => {
    const params = useParams()
    const currentModel = abibasArr.find(el=>el.id === Number(params.id))
    return (
        <div style={{textAlign: "center"}}>

            {currentModel
                ? <>
                    <h2>{adidasArr[Number(params.id)].model}</h2>
                    <h4>{adidasArr[Number(params.id)].collection}</h4>
                    <h4>{adidasArr[Number(params.id)].price}</h4>
                    <img src={adidasArr[Number(params.id)].picture}
                         style={{width: '300', height: 'auto', marginRight: '10px'}}
                         alt={''}/>
                </>
                : <h2>Такой модели не существует</h2>
            }
        </div>
    );
};

