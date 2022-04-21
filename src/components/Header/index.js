import style from './Header.module.scss';
import Container from "../Container";
import logoPng from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const menuList = MENU.map((item, index) => {
    return (
        <li key={index}><a href="#">{item}</a></li>
    )
})
const Header = () => {
    return (
        <header className={style.root}>
            <div className={style.header}>
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