import React from 'react';
import styles from "./components/Site.module.css";
import {ADIDAS} from "./components/pages/Adidas";
import {PUMA} from "./components/pages/Puma";
import {ABIBAS} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styless"
import {Model} from "./components/pages/Model";

const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    PAGEERROR: "/error404",
    PAGEALL: "/*",
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки

                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<ADIDAS/>}/>
                        <Route path={PATH.PAGE2} element={<PUMA/>}/>
                        <Route path={PATH.PAGE3} element={<ABIBAS/>}/>

                        <Route path={"/ADIDAS/:id"} element={<Model/>}/>

                        <Route path={PATH.PAGEERROR} element={<Error404/>}/>
                        <Route path={PATH.PAGEALL} element={<Navigate to={"/error404"}/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;