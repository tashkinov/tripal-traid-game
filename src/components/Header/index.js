import style from './Header.module.scss';
import Container from "../Container";
import logoPng from '../../assets/logo.png';
import {useEffect, useState} from "react";
import cn from 'classnames';
import {Link, useNavigate} from "react-router-dom";

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
                        <li><Link to="/" >Main</Link></li>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </Container>
            </div>
        </header>
    )
}

export default Header;