import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styless"

const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    PAGE4: "/Prices",
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
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Цены для оптовиков</NavLink></S.NavWrapper>
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