import {Outlet} from 'react-router-dom';

import Header from '../Header';
import Footer from "../Footer";

import style from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={style.root}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
