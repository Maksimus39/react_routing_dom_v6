import React from 'react';
import {useParams} from "react-router-dom";
import {PumaArr} from "./Puma";

export const ModelPuma = () => {
    const params = useParams()

    const currentModel = PumaArr.find(el => el.id === Number(params.id))

    return (
        <div style={{textAlign: "center"}}>
            {currentModel
                ? <>
                    <h2>{PumaArr[Number(params.id)].model}</h2>
                    <h4>{PumaArr[Number(params.id)].collection}</h4>
                    <h4>{PumaArr[Number(params.id)].price}</h4>
                    <img src={PumaArr[Number(params.id)].picture}
                         style={{width: '300', height: 'auto', marginRight: '10px'}}
                         alt={''}/>
                </>
                : <h2>Такой модели не существует</h2>
            }
        </div>
    );
};

