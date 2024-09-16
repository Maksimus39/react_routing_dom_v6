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
    PAGEERROR: "/error404",
    PAGEALL: "/*",
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
                    <S.NavWrapper><NavLink to={PATH.PAGEALL}>Цены для оптовиков</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки


                    <Outlet/>


                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<ADIDAS/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<PUMA/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<ABIBAS/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

                    {/*    <Route path={PATH.Model} element={<Model/>}/>*/}


                    {/*    <Route path={PATH.PAGEERROR} element={<Error404/>}/>*/}
                    {/*    <Route path={PATH.PAGEALL} element={<Navigate to={"/error404"}/>}/>*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;