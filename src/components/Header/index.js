import style from './Header.module.scss';
import Container from "../Container";
import logoPng from '../../assets/logo.png';
import {useEffect, useState} from "react";
import cn from 'classnames';
import {NavLink, useNavigate} from "react-router-dom";

const MENU = [
    {
        title: 'Main',
        href: '/',
    },
    {
        title: 'Characters',
        href: '/characters',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
];

const Header = () => {
    const navigate = useNavigate();
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

    const handleLogoClick = () => {
        navigate('/');
    }

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
                    <div className={style.logo} onClick={handleLogoClick}>
                        <img src={logoPng} />
                    </div>
                    <ul className={style.nav}>
                        {
                            MENU.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.href}
                                        className={({isActive}) => {
                                            return isActive ? style.active : null
                                        }}
                                    >{item.title}</NavLink>
                                </li>
                                )
                            )
                        }
                    </ul>
                </Container>
            </div>
        </header>
    )
}

export default Header;