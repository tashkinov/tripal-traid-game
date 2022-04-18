import style from './Footer.module.css'
import Container from "../Container";

const Footer = () => {
    return (
        <footer className={style.root}>
            <Container>
                <div className={style.footerWrap}>
                    Coded with
                    <span className={style.heart}></span>
                    by You
                </div>
            </Container>
        </footer>
    )
}

export default Footer;