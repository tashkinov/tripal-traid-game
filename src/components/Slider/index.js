import Heading from "../Heading";
import Container from "../Container";
import logoPng from '../../assets/logo.png';
import style from './Slider.module.css';

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1} black>
                        Heading Level 1
                    </Heading>
                    <Heading level={2}>
                        Heading Level 2
                    </Heading>
                    <div className={style.image}>
                        <img src={logoPng} alt="Logo"/>
                    </div>
                    <div className={style.image} />
                    <div className={style.call}>
                        <button className={style.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;