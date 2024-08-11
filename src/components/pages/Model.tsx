import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas";
import {PumaArr, PumaItem} from "./Puma";
import {abibasArr, AbibasItem} from "./Abibas";

type CrossModels = {
    [key: string]: (AdidasItem[] | PumaItem[] | AbibasItem[])
}
const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: PumaArr,
    abibas: abibasArr
}

export const Model = () => {
    const {model, id} = useParams<{ model: string, id: string }>()
    console.log(model)

    // const currentModel = adidasArr.find(el => el.id === Number(id))
    const currentModel = model
        ? crossModels[model].find(el => el.id === Number(id))
        : null

    return (
        <div style={{textAlign: "center"}}>

            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h4>{currentModel.price}</h4>
                    <img src={currentModel.picture}
                         style={{width: '300', height: 'auto', marginRight: '10px'}}
                         alt={''}/>
                </>
                : <h2>Такой модели не существует</h2>
            }
        </div>
    );
};

