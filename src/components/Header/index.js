import style from './Header.module.scss';
import Container from "../Container";
import logoPng from '../../assets/logo.png';
import {useEffect, useState} from "react";
import cn from 'classnames';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const menuList = MENU.map((item, index) => {
    return (
        <li key={index}><a href="#">{item}</a></li>
    )
})
const Header = () => {
    let isScrollTop;
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = e => {
            scrollTop > 60 ? isScrollTop = true : isScrollTop = false;
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    return (
        <header className={style.root}>
            <div className={cn(
                style.header,
                {
                    [style.small]: scrollTop
                }
            )
                }>
                <Container className={style.headerWrap}>
                    <div className={style.logo}>
                        <img src={logoPng} />
                    </div>
                    <ul className={style.nav}>
                        {menuList}
                    </ul>
                </Container>
            </div>
        </header>
    )
}

export default Header;