import {Outlet, useMatch} from 'react-router-dom';
import Container from '../Container';

import Header from '../Header';
import Footer from "../Footer";

import style from './Layout.module.scss';

const Layout = () => {
    const match = useMatch({path: '/'});
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
