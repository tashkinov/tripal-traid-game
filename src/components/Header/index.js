import style from './Header.module.css';
const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const menuList = MENU.map(item => {
    return (
        <li><a href="#">{item}</a></li>
    )
})
const Header = () => {
    return (
        <header className={style.root}>
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}></div>
                    <ul className={style.nav}>
                        {menuList}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;