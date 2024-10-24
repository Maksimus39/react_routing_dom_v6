import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styless"


export const PATH = {
    Adidas: "/adidas",
    Puma: "/puma",
    Abibas: "/abibas",
    Prices: "/Prices",
    Model: "/:model/:id",
    PAGE_ERROR: "/error404",
    PAGE_ALL: "/*",
    PROTECTED_PAGE: '/protected',
    Login: "/login",

} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.Adidas}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Puma}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Abibas}>ABIBAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE_ALL}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Защищенная страница</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>

                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;