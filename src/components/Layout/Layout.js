import {Outlet, useMatch, useLocation} from 'react-router-dom';
import Container from '../Container';

import Header from '../Header';
import Footer from "../Footer";

import style from './Layout.module.scss';
import {useEffect} from "react";

const Layout = () => {

    const match = useMatch({path: '/'});
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <>
            <Header />
            {
                match !== null ? <Outlet /> : (
                    <div>
                        <Container className={style.container}>
                            <Outlet />
                        </Container>
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default Layout;
